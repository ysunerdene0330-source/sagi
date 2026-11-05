#!/usr/bin/env python3
"""Creates data/i18n.js and data/venues.js next to this script by copying the `i18n` and
`venues` blocks verbatim from your original page.
Usage:  python extract-data.py "OG #nothouch.md"      (python3 on Mac/Linux)"""
import re, sys, pathlib

if len(sys.argv) < 2:
    sys.exit('Usage: python extract-data.py "OG #nothouch.md"')
src = pathlib.Path(sys.argv[1]).read_text(encoding="utf-8")
out = pathlib.Path(__file__).resolve().parent / "data"
out.mkdir(exist_ok=True)

def grab(start, end):
    m = re.search(re.escape(start) + r".*?" + end, src, re.S)
    if not m:
        sys.exit(f"Could not find: {start}")
    return m.group(0)

blocks = {"i18n": grab("const i18n = {", r"\n\s*\};"), "venues": grab("const venues = [", r"\n\s*\];")}
for name, code in blocks.items():
    (out / f"{name}.js").write_text(code + "\n", encoding="utf-8")
    print(f"data/{name}.js written")
print("venues found:", len(re.findall(r"^\s*name:", blocks["venues"], re.M)))
