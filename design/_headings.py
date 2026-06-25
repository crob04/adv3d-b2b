#!/usr/bin/env python3
import re
with open('/tmp/adv3d-home.html') as f:
    html = f.read()

# Order of h1, h2, h3, h4 in order
tags = re.findall(r'<(h[1-4])[^>]*>(.*?)</\1>', html, re.S)
for tag, content in tags:
    text = re.sub(r'<[^>]+>', ' ', content).strip()
    text = re.sub(r'\s+', ' ', text)
    print(f'{tag}: {text[:120]}')
