import json

with open('/opt/data/home/hermes-orchestrator/adv3d-b2b/research/.pexels_results.json') as f:
    R = json.load(f)

for slot, data in R.items():
    print(f"\n=== {slot} ({data['q']}) ===")
    for i, p in enumerate(data['photos'][:5]):
        print(f"  [{i}] {p['w']}x{p['h']}  {p['alt'][:80]}")
        print(f"      {p['url']}")
        print(f"      large: {p['large'][:100]}...")
