import json
import os
import sys
import time
import urllib.request

# Pre-selected winners (slot, page_url, base_web_url)
SELECTIONS = [
    ("hero", "https://pixabay.com/photos/brass-machine-technology-mechanical-4684040/",
     "https://pixabay.com/get/gd9b7f854bfaecb552774a86e39283146070ae6d05ba98c041f31f590e393b99e99610bf563327e328227e699ec9841cd9ffe51b68501d652d7ef692107a1636f_640.jpg",
     "Industrial 3D printer print-head close-up (sober B2B tone)"),
    ("fdm", "https://pixabay.com/photos/printer-technology-3d-printer-4348150/",
     "https://pixabay.com/get/g12e02f6764de751a24d22c02d7094de3c2a4b2064a731ca722797c205ddc4cad135a21402164a99cf587c8289f63f67cf226b4223d510e4619fb9dbe718f10f3_640.jpg",
     "Industrial FDM 3D printer in operation"),
    ("sla", "https://pixabay.com/photos/korablik-ship-3d-printing-green-2681190/",
     "https://pixabay.com/get/g44e30411f3342c140ce71bf4052057e01f88c28521b0150c6c1ad1fb8566ae3ce0cf3ce4402d2e182d927dba43144d532c32a6df58272ab95bb5fb08a102dcb7_640.jpg",
     "3D printed resin part (representative of SLA resin workflow)"),
    ("sls", "https://pixabay.com/photos/printer-3d-print-3d-printing-white-2416269/",
     "https://pixabay.com/get/gf245799e02ac365949736d96b5cc3e566f1322920a738acc85671ca7ba7fd46e74d6e46fcc88bd053a855594cbbc1daa51b468e1af0221bcb7e04dec68b51643_640.jpg",
     "Industrial enclosed SLS-class 3D printer"),
    ("qa", "https://pixabay.com/photos/engineer-industry-construction-work-4869999/",
     "https://pixabay.com/get/g40b7dd0fca83a6637c8edd57234b7145b7fb3126eb49796958b4fb13e47b23c7a7f869cacccfeaa6cc3545d5033c64e7334b9d13f16adb442e30cd064c6a3516_640.jpg",
     "Engineer inspecting work in industrial setting (QA / verification)"),
    ("multimaterial", "https://pixabay.com/photos/printer-3d-print-3d-printing-white-2416269/",
     "https://pixabay.com/get/ga80f53df1b8c251352311d3c0cd8a83d00f993ab8e7ede48bf4615feacd0268961037e618a28e328b3889edd7fd4688747bf31b56501cfb40dd1ae2b6c34ef74_640.jpg",
     "Industrial multi-process additive manufacturing"),
]

IMG_DIR = '/opt/data/home/hermes-orchestrator/adv3d-b2b/research/images'
os.makedirs(IMG_DIR, exist_ok=True)

manifest = []

for slot, page, base_url, alt in SELECTIONS:
    # Try _1280 first, fall back to _960, then base (_640)
    candidates = [
        base_url.replace('_640.jpg', '_1280.jpg'),
        base_url.replace('_640.jpg', '_960.jpg'),
        base_url,
    ]
    dest = os.path.join(IMG_DIR, f"{slot}.jpg")
    success = False
    last_status = None
    for url in candidates:
        # Validate with HEAD-ish GET, range to 0
        for attempt in range(1, 4):
            try:
                req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req, timeout=20) as resp:
                    status = resp.status
                    data = resp.read()
                last_status = status
                if status == 200 and len(data) > 5000:
                    # Check magic bytes
                    if data[:3] == b'\xff\xd8\xff':
                        fmt = 'JPEG'
                    elif data[:8] == b'\x89PNG\r\n\x1a\n':
                        fmt = 'PNG'
                    elif data[:4] == b'RIFF' and data[8:12] == b'WEBP':
                        fmt = 'WebP'
                    else:
                        fmt = 'INVALID'
                    if fmt != 'INVALID':
                        with open(dest, 'wb') as f:
                            f.write(data)
                        size = len(data)
                        print(f"  [OK] {slot}: {size} bytes {fmt}  <-  {url[:90]}")
                        manifest.append({
                            'slot': slot, 'dest': dest, 'url': url, 'page': page,
                            'size': size, 'format': fmt, 'alt': alt
                        })
                        success = True
                        break
            except Exception as e:
                print(f"  [retry {attempt}] {slot} {url[:70]}: {e}", file=sys.stderr)
                time.sleep(attempt * 5)
        if success:
            break
    if not success:
        print(f"  [FAIL] {slot}: all candidates failed (last status {last_status})")
    time.sleep(3)

with open('/opt/data/home/hermes-orchestrator/adv3d-b2b/research/.download_manifest.json', 'w') as f:
    json.dump(manifest, f, indent=2)
print(f"\n{len(manifest)}/{len(SELECTIONS)} slots filled.")
