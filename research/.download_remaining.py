import json
import os
import time
import urllib.request

# Only the remaining slots
PENDING = [
    ("qa", "https://pixabay.com/photos/engineer-industry-construction-work-4869999/",
     "https://pixabay.com/get/g40b7dd0fca83a6637c8edd57234b7145b7fb3126eb49796958b4fb13e47b23c7a7f869cacccfeaa6cc3545d5033c64e7334b9d13f16adb442e30cd064c6a3516_640.jpg",
     "Engineer inspecting work in industrial setting (QA / verification)"),
    ("multimaterial", "https://pixabay.com/photos/printer-3d-print-3d-printing-white-2416269/",
     "https://pixabay.com/get/ga80f53df1b8c251352311d3c0cd8a83d00f993ab8e7ede48bf4615feacd0268961037e618a28e328b3889edd7fd4688747bf31b56501cfb40dd1ae2b6c34ef74_640.jpg",
     "Industrial multi-process additive manufacturing"),
]

IMG_DIR = '/opt/data/home/hermes-orchestrator/adv3d-b2b/research/images'

for slot, page, url, alt in PENDING:
    dest = os.path.join(IMG_DIR, f"{slot}.jpg")
    if os.path.exists(dest) and os.path.getsize(dest) > 5000:
        print(f"  [skip] {slot} already present")
        continue
    print(f"  downloading {slot} from {url[:80]}...")
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=20) as resp:
            data = resp.read()
        if data[:3] == b'\xff\xd8\xff':
            with open(dest, 'wb') as f:
                f.write(data)
            print(f"  [OK] {slot}: {len(data)} bytes")
        else:
            print(f"  [BAD] {slot}: not JPEG")
    except Exception as e:
        print(f"  [ERR] {slot}: {e}")
    time.sleep(3)

print("Done.")
print(f"\nFinal images dir:")
for f in sorted(os.listdir(IMG_DIR)):
    p = os.path.join(IMG_DIR, f)
    print(f"  {f}: {os.path.getsize(p)} bytes")
