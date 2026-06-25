import json
import os
import time
import urllib.request

# Pexels picks (slot, photo_id, alt caption)
SELECTIONS = [
    ("hero", "34222005", "Industrial machinery with robotic arm in a modern manufacturing facility (B2B hero)"),
    ("fdm", "4485456", "3D printer nozzle operating in a workshop setting (FDM close-up)"),
    ("sla", "20877042", "Modern 3D printer interior, advanced technology (SLA-style process)"),
    ("sls", "20877039", "3D printer extrusion head in focus, modern technology (SLS-class process)"),
    ("qa", "7180823", "Craftsman using a caliper for precise measurement in a workshop (QA / verification)"),
    ("multimaterial", "34718922", "Industrial factory floor with machinery and structured workstations (multi-process)"),
]

IMG_DIR = '/opt/data/home/hermes-orchestrator/adv3d-b2b/research/images'
os.makedirs(IMG_DIR, exist_ok=True)

manifest = []
for slot, pid, alt in SELECTIONS:
    # Use ?auto=compress&cs=tinysrgb&h=1280 for landscape high-res
    url = f"https://images.pexels.com/photos/{pid}/pexels-photo-{pid}.jpeg?auto=compress&cs=tinysrgb&h=1280&w=1920"
    dest = os.path.join(IMG_DIR, f"{slot}.jpg")
    print(f"  downloading {slot} <- pexels {pid} ...")
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = resp.read()
        if data[:3] != b'\xff\xd8\xff':
            print(f"    [BAD] not JPEG ({data[:8]!r})")
            continue
        with open(dest, 'wb') as f:
            f.write(data)
        size = len(data)
        print(f"    [OK] {slot}: {size} bytes -> {dest}")
        manifest.append({'slot': slot, 'pexels_id': pid, 'url': url, 'size': size, 'alt': alt})
    except Exception as e:
        print(f"    [ERR] {slot}: {e}")
    time.sleep(2)

with open('/opt/data/home/hermes-orchestrator/adv3d-b2b/research/.download_manifest.json', 'w') as f:
    json.dump(manifest, f, indent=2)
print(f"\n{len(manifest)}/{len(SELECTIONS)} slots filled.")
print("\nFinal images dir:")
for f in sorted(os.listdir(IMG_DIR)):
    p = os.path.join(IMG_DIR, f)
    print(f"  {f}: {os.path.getsize(p)} bytes")
