#!/usr/bin/env python3
import sys
try:
    import playwright
    print("playwright:", playwright.__file__)
except Exception as e:
    print("no playwright:", e)

try:
    import selenium
    print("selenium:", selenium.__file__)
except Exception as e:
    print("no selenium:", e)

# Check for chromium
import shutil
for cmd in ['chromium', 'chromium-browser', 'google-chrome', 'chrome', 'headless_shell']:
    p = shutil.which(cmd)
    if p:
        print(f"{cmd}: {p}")

# Check for npm packages
import os
for path in [
    '/usr/lib/chromium',
    '/opt/chrome',
    '/opt/chromium',
    os.path.expanduser('~/.cache/ms-playwright'),
]:
    if os.path.exists(path):
        print(f"found: {path}")
