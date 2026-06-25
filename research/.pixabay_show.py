import json
results = json.load(open('/opt/data/home/hermes-orchestrator/adv3d-b2b/research/.pixabay_results.json'))
for slot, data in results.items():
    print(f"\n=== {slot} ({data['q']}) - {data['total']} total ===")
    for i, hit in enumerate(data['hits'][:6]):
        print(f"  [{i}] {hit['w']}x{hit['h']}  {hit['tags'][:90]}")
        print(f"      page: {hit['page']}")
        print(f"      web:  {hit['web']}")
