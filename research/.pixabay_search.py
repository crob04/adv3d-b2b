import json
import os
import sys
import time
import urllib.parse
import urllib.request

PIXABAY_KEY = open('/opt/data/keys/image-search/pixabay').read().strip()
PEXELS_KEY = open('/opt/data/keys/image-search/pexels').read().strip()

QUERIES = [
    ("hero", "industrial 3d printer factory"),
    ("fdm", "fdm fused deposition modeling 3d printer"),
    ("sla", "sla stereolithography resin 3d printing"),
    ("sls", "sls selective laser sintering powder 3d printing"),
    ("qa", "quality control inspection manufacturing"),
    ("multimaterial", "multi material 3d printing"),
]

results = {}

for slot, q in QUERIES:
    url = f"https://pixabay.com/api/?key={PIXABAY_KEY}&q={urllib.parse.quote(q)}&image_type=photo&orientation=horizontal&min_width=1200&safesearch=true&per_page=8"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = json.loads(resp.read())
    except Exception as e:
        print(f"  {slot}: ERR {e}", file=sys.stderr)
        data = {'hits': []}
    hits = []
    for h in data.get('hits', [])[:8]:
        hits.append({
            'id': h['id'],
            'w': h['imageWidth'],
            'h': h['imageHeight'],
            'tags': h['tags'][:200],
            'page': h['pageURL'],
            'web': h['webformatURL'],
            'large': h.get('largeImageURL', h['webformatURL']),
            'photographer': h.get('user', ''),
        })
    results[slot] = {'q': q, 'hits': hits, 'total': data.get('totalHits', 0)}
    print(f"{slot} ({q}): {len(hits)} hits, total {data.get('totalHits', 0)}")
    time.sleep(1)

# Save results
with open('/opt/data/home/hermes-orchestrator/adv3d-b2b/research/.pixabay_results.json', 'w') as f:
    json.dump(results, f, indent=2)
print("Saved results.")
