#!/usr/bin/env python3
"""Inspect served HTML and check visual gate items - v2 with fixed regex."""
import re
import sys

with open('/tmp/adv3d-home.html') as f:
    html = f.read()

# Section in order check (look for section order via parent of each)
print("=== Section order (in code) ===")
# Find each section's identifier via the comment markers or via a specific marker
# Use the source files instead - just print section tags with their child h1/h2

# Find all <section>...</section> blocks at top level
secs = []
pos = 0
depth = 0
sec_start = None
while pos < len(html):
    if html[pos:pos+8] == '<section' and (html[pos+8] == ' ' or html[pos+8] == '>'):
        if depth == 0:
            sec_start = pos
        depth += 1
        pos = html.find('>', pos) + 1
    elif html[pos:pos+10] == '</section>':
        depth -= 1
        if depth == 0 and sec_start is not None:
            secs.append(html[sec_start:pos+10])
            sec_start = None
        pos += 10
    else:
        pos += 1

print(f"Top-level <section> count: {len(secs)}")
for i, s in enumerate(secs):
    # Get h1/h2 if any
    h1 = re.findall(r'<h1[^>]*>(.*?)</h1>', s, re.S)
    h2 = re.findall(r'<h2[^>]*>(.*?)</h2>', s, re.S)
    py = re.findall(r'py-\d+', s)
    aria = re.findall(r'aria-label="([^"]+)"', s)
    label = aria[0] if aria else ''
    if h1:
        h1t = re.sub(r'<[^>]+>', ' ', h1[0]).strip()
        h1t = re.sub(r'\s+', ' ', h1t)
        title = f"H1: {h1t[:60]}"
    elif h2:
        h2t = re.sub(r'<[^>]+>', ' ', h2[0]).strip()
        h2t = re.sub(r'\s+', ' ', h2t)
        title = f"H2: {h2t[:60]}"
    else:
        title = "(no h1/h2)"
    print(f"  [{i}] padding={py} label={label!r}")
    print(f"       {title}")

print()
print("=== CTA buttons (look for buttons with text) ===")
# Find all <button> ... </button>
btns = re.findall(r'<button[^>]*>(.*?)</button>', html, re.S)
for b in btns:
    text = re.sub(r'<[^>]+>', ' ', b).strip()
    text = re.sub(r'\s+', ' ', text)
    if text and len(text) > 3:
        print(f"  BUTTON: {text[:80]}")

print()
print("=== Links (anchors with text) ===")
anchors = re.findall(r'<a[^>]*href="([^"]*)"[^>]*>(.*?)</a>', html, re.S)
for href, txt in anchors:
    text = re.sub(r'<[^>]+>', ' ', txt).strip()
    text = re.sub(r'\s+', ' ', text)
    if text and len(text) > 3:
        print(f"  {href} -> {text[:60]}")

print()
print("=== Dark mode toggle (look for sun/moon icon button) ===")
# Look for aria-labels
aria_all = re.findall(r'aria-label="([^"]+)"', html)
for a in aria_all:
    print(f"  aria-label: {a}")

# Look for dark/light classes
print()
print("=== dark: variant usage count (source) ===")
import subprocess
result = subprocess.run(['grep', '-r', '-c', 'dark:', '/opt/data/home/hermes-orchestrator/adv3d-b2b/components/', '/opt/data/home/hermes-orchestrator/adv3d-b2b/app/'], capture_output=True, text=True)
print(result.stdout[:2000])
