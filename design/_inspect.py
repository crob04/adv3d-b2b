#!/usr/bin/env python3
"""Inspect served HTML and check visual gate items."""
import re
import sys

with open('/tmp/adv3d-home.html') as f:
    html = f.read()

print(f"HTML length: {len(html)} bytes")
print()

# Title
m = re.search(r'<title[^>]*>(.*?)</title>', html, re.S)
if m:
    print(f"<title>: {m.group(1).strip()}")

# H1
m = re.search(r'<h1[^>]*>(.*?)</h1>', html, re.S)
if m:
    text = re.sub(r'<[^>]+>', ' ', m.group(1)).strip()
    text = re.sub(r'\s+', ' ', text)
    print(f"<h1>: {text}")

# H2s in order
print()
print("--- H2s in order ---")
h2s = re.findall(r'<h2[^>]*>(.*?)</h2>', html, re.S)
for i, h in enumerate(h2s):
    text = re.sub(r'<[^>]+>', ' ', h).strip()
    text = re.sub(r'\s+', ' ', text)
    print(f"  h2[{i}]: {text}")

# Sections (count by id or section tag)
print()
print("--- section tags ---")
sections = re.findall(r'<section[^>]*>', html)
print(f"  total <section>: {len(sections)}")

# Check for forbidden words in rendered body
print()
print("--- forbidden words in rendered HTML ---")
words = [
    'seamless', 'empower', 'unlock', 'journey', 'solution', 'cutting-edge',
    'state-of-the-art', 'revolutionize', 'transform', 'all-in-one', 'next-level',
    'world-class', 'game-changing', 'industrial', 'engineering-grade', 'production-grade',
    'end-use', 'aerospace', 'automotive', 'robotics', 'medical-grade', 'clinical',
    'certified', 'specification',
]
inversions = {'aerospace', 'automotive', 'industrial', 'production-grade', 'engineering-grade', 'end-use'}
for w in words:
    if '-' in w:
        pattern = r'\b' + re.escape(w) + r'\b'
    else:
        pattern = r'(?<![a-zA-Z-])' + w + r'(?![a-zA-Z-])'
    matches = re.findall(pattern, html, re.IGNORECASE)
    if matches:
        is_inv = w in inversions
        tag = "[INVERSION-REQUIRED]" if is_inv else "[FORBIDDEN]"
        print(f"  {tag} {w}: {len(matches)}")

# CTA buttons
print()
print("--- CTA button text ---")
btns = re.findall(r'<button[^>]*>(.*?)</button>', html, re.S)
for b in btns:
    text = re.sub(r'<[^>]+>', ' ', b).strip()
    text = re.sub(r'\s+', ' ', text)
    if text:
        print(f"  BUTTON: {text}")

# Image src
print()
print("--- image src refs ---")
srcs = re.findall(r'src="([^"]+)"', html)
for s in srcs:
    print(f"  {s}")

# FAQ count
print()
print("--- FAQ question count ---")
faqs = re.findall(r'<details[^>]*>', html)
print(f"  <details> count: {len(faqs)}")

# Dark mode toggle
print()
print("--- dark mode toggle ---")
toggles = re.findall(r'(?i)aria-label="([^"]*(?:dark|theme|light|toggle)[^"]*)"', html)
for t in togges[:5]:
    print(f"  aria-label: {t}")

# bg-gradient
print()
print("--- bg-gradient in rendered HTML ---")
n = len(re.findall(r'bg-gradient', html))
print(f"  count: {n}")

# grid-cols-3
print()
print("--- grid-cols-3 in rendered HTML ---")
n = len(re.findall(r'grid-cols-3', html))
print(f"  count: {n}")

# border-l-4
print()
print("--- border-l-4 in rendered HTML ---")
n = len(re.findall(r'border-l-4', html))
print(f"  count: {n}")

# fontshare link
print()
print("--- fontshare in head ---")
n = len(re.findall(r'api\.fontshare\.com', html))
print(f"  count: {n}")

# rounded-full bg
print()
print("--- rounded-full + bg- combo (icon-in-circle check) ---")
matches = re.findall(r'rounded-full[^"]*bg-[a-z-]+', html)
for m in matches[:10]:
    print(f"  {m}")
print(f"  total: {len(matches)}")

# 3-column symmetric grid
print()
print("--- 3-column symmetric grid (looking for equal-cols sections) ---")
# Find sections with grid layouts
grid_secs = re.findall(r'<section[^>]*>.*?</section>', html, re.S)
for i, s in enumerate(grid_secs):
    if 'grid-cols' in s and 'col-span' not in s:
        m = re.search(r'grid-cols-(\d+)', s)
        if m and int(m.group(1)) == 3:
            print(f"  POTENTIAL 3-col section #{i}")

# Padding values
print()
print("--- padding per section ---")
secs = re.findall(r'<section[^>]*class="([^"]*)"', html)
for i, s in enumerate(secs):
    py = re.findall(r'py-\d+', s)
    if py:
        print(f"  section #{i} padding: {py}")

# Check logo image
print()
print("--- logo image check ---")
logo = re.findall(r'(logo[^"]*)', html, re.IGNORECASE)
for l in logo[:5]:
    print(f"  {l}")

# Check for any 404 references
print()
print("--- unique image URLs ---")
all_imgs = re.findall(r'(?:src|href)="([^"]*\.(?:jpg|png|svg|webp))"', html)
unique = sorted(set(all_imgs))
for u in unique:
    print(f"  {u}")
