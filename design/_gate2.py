#!/usr/bin/env python3
"""Re-check F19 and F20 with proper exclusions."""
import subprocess

# F19: USE_MOCK_DATA not true (exclude design/, node_modules, .next)
r = subprocess.run(['grep', '-rn', 'USE_MOCK_DATA=true',
                    '/opt/data/home/hermes-orchestrator/adv3d-b2b/',
                    '--include=*.ts', '--include=*.tsx', '--include=*.js',
                    '--include=*.json', '--include=*.env*'],
                   capture_output=True, text=True)
filtered = [l for l in r.stdout.splitlines()
            if 'node_modules' not in l and '.next' not in l
            and '/design/' not in l]
print(f"F19: {len(filtered)} hits")
for l in filtered: print(f"  {l}")
print(f"F19 verdict: {'PASS' if not filtered else 'FAIL'}")

# F20: localhost in production metadata (exclude design/, node_modules, .next, .md, _build references)
r = subprocess.run(['grep', '-rnE', 'localhost',
                    '/opt/data/home/hermes-orchestrator/adv3d-b2b/',
                    '--include=*.ts', '--include=*.tsx', '--include=*.js',
                    '--include=*.json', '--include=*.css', '--include=*.html'],
                   capture_output=True, text=True)
filtered = [l for l in r.stdout.splitlines()
            if 'node_modules' not in l and '.next' not in l
            and '/design/' not in l
            and 'next.config' not in l]  # dev hints in next.config OK
print()
print(f"F20: {len(filtered)} hits in production metadata")
for l in filtered: print(f"  {l}")
print(f"F20 verdict: {'PASS' if not filtered else 'FAIL'}")

# Also check the rendered HTML for localhost
r = subprocess.run(['grep', '-i', 'localhost', '/tmp/adv3d-home.html'],
                   capture_output=True, text=True)
print()
print(f"F20b: localhost in rendered HTML: {len(r.stdout.splitlines())} hits")
for l in r.stdout.splitlines()[:3]:
    print(f"  {l[:200]}")
print(f"F20b verdict: {'PASS' if not r.stdout.strip() else 'FAIL'}")
