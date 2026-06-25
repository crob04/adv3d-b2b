import os
IMG_DIR = '/opt/data/home/hermes-orchestrator/adv3d-b2b/research/images'
for f in sorted(os.listdir(IMG_DIR)):
    p = os.path.join(IMG_DIR, f)
    with open(p, 'rb') as fh:
        sig = fh.read(16)
    if sig[:3] == b'\xff\xd8\xff':
        fmt = 'JPEG'
    elif sig[:8] == b'\x89PNG\r\n\x1a\n':
        fmt = 'PNG'
    elif sig[:4] == b'RIFF' and sig[8:12] == b'WEBP':
        fmt = 'WebP'
    else:
        fmt = f'INVALID ({sig[:8]!r})'
    size = os.path.getsize(p)
    print(f"  {f}: {size} bytes, {fmt}")
