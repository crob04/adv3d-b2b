import re
import sys
from html.parser import HTMLParser

class TextExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.parts = []
        self.skip_depth = 0
    def handle_starttag(self, tag, attrs):
        if tag in ('script', 'style', 'noscript', 'svg'):
            self.skip_depth += 1
    def handle_endtag(self, tag):
        if tag in ('script', 'style', 'noscript', 'svg'):
            self.skip_depth = max(0, self.skip_depth - 1)
    def handle_data(self, data):
        if self.skip_depth == 0:
            t = data.strip()
            if t:
                self.parts.append(t)

def extract(path):
    with open(path, encoding='utf-8', errors='ignore') as f:
        html = f.read()
    p = TextExtractor()
    p.feed(html)
    return p.parts

for f in ['opservices.html', 'www.protolabs.com.html', 'www.xometry.com.html', 'www.hubs.com.html']:
    parts = extract('/tmp/' + f)
    text = ' '.join(parts)
    text = re.sub(r'\s+', ' ', text)
    out_name = f.replace('.html', '.txt')
    with open('/opt/data/home/hermes-orchestrator/adv3d-b2b/research/.tmp_' + out_name, 'w') as out:
        out.write(text)
    print(f"{f}: {len(text)} chars, {len(parts)} parts")
