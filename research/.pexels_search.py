import json
import os
import sys
import time
import urllib.parse
import urllib.request

PEXELS_KEY = open('/opt/data/keys/image-search/pexels').read().strip()

# Better queries targeting industrial/B2B imagery
QUERIES = [
    ("hero_industrial", "industrial robot arm factory"),
    ("hero_cnc", "precision manufacturing factory"),
    ("fdm_industrial", "large format 3d printer industrial"),
    ("sla_industrial", "industrial 3d printing production"),
    ("sls_industrial", "industrial powder bed 3d printing"),
    ("qa_metrology", "engineer measuring precision part"),
    ("qa_cmm", "quality control cmm inspection"),
    ("factory_automation", "factory automation production line"),
    ("multi_process", "additive manufacturing factory"),
]

results = {}

for slot, q in QUERIES:
    url = f"https://api.pexels.com/v1/search?query={urllib.parse.quote(q)}&orientation=landscape&size=large&per_page=8"
    try:
        req = urllib.request.Request(url, headers={
            'Authorization': PEXELS_KEY,
            'User-Agent': 'Mozilla/5.0'
        })
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = json.loads(resp.read())
    except Exception as e:
        print(f"  {slot}: ERR {e}", file=sys.stderr)
        data = {'photos': []}
    photos = []
    for p in data.get('photos', [])[:8]:
        photos.append({
            'id': p['id'],
            'w': p['width'],
            'h': p['height'],
            'alt': p.get('alt', ''),
            'photographer': p.get('photographer', ''),
            'url': p['url'],
            'large': p['src']['large'],
            'large2x': p['src'].get('large2x', p['src']['large']),
            'original': p['src']['original'],
        })
    results[slot] = {'q': q, 'photos': photos, 'total': len(data.get('photos', []))}
    print(f"{slot} ({q}): {len(photos)} photos")
    time.sleep(2)

with open('/opt/data/home/hermes-orchestrator/adv3d-b2b/research/.pexels_results.json', 'w') as f:
    json.dump(results, f, indent=2)
print("Saved.")
