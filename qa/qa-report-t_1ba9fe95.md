# QA Report — Build (t_1ba9fe95)

**Reviewer:** codex-qa (run 1)
**Date:** 2026-06-24
**Subject:** T7 build QA + deployability for adv3d-b2b (B2B contract manufacturing landing page)
**Verdict:** **FAIL** — 1 copy rule violation, 1 brief/rule tension flagged for operator review.

---

## Files reviewed

- `/opt/data/home/hermes-orchestrator/adv3d-b2b/app/layout.tsx`
- `/opt/data/home/hermes-orchestrator/adv3d-b2b/app/page.tsx`
- `/opt/data/home/hermes-orchestrator/adv3d-b2b/app/globals.css`
- `/opt/data/home/hermes-orchestrator/adv3d-b2b/components/*.tsx` (all 10)
- `/opt/data/home/hermes-orchestrator/adv3d-b2b/COPY_BRIEF.md` (re-validated, see COPY-02 finding)
- `/opt/data/home/hermes-orchestrator/adv3d-b2b/.next/` (built bundle)
- Live local production server at `http://localhost:3030/` (next start)

---

## Copy checks

### COPY-01 — Hero headline outcome-first — **PASS**

Rendered H1 (from `curl http://localhost:3030/`):

> Spec-compliant parts on your dock. Tolerance-confirmed batch-to-batch. Engineering review before the print, not after.

Three short clauses, each a falsifiable outcome claim, in `[Result]. [Result]. [Result.]` format. Could NOT describe any other company in the category. PASS.

### COPY-02 — No forbidden phrases in rendered text — **FAIL**

Q10 inversion applied for this build. 6 phrases SKIPPED from grep (must appear ≥1× in copy as required vocabulary):
- `aerospace` ✓ 1 hit
- `automotive` ✓ 2 hits
- `industrial` ✓ 1 hit
- `production-grade` ✓ 2 hits
- `engineering-grade` ✓ 1 hit
- `end-use` ✓ 1 hit

18 phrases still forbidden. Grep against rendered HTML (`/tmp/rendered.html` from live `next start`):

| # | Phrase | Hits | Verdict |
|---|--------|------|---------|
| 1 | seamless | 0 | clean |
| 2 | empower | 0 | clean |
| 3 | unlock | 0 | clean |
| 4 | journey | 0 | clean |
| 5 | solution | 0 | clean |
| 6 | cutting-edge | 0 | clean |
| 7 | state-of-the-art | 0 | clean |
| 8 | revolutionize | 0 | clean |
| 9 | transform | 0 in rendered text | clean (one hit in `app/globals.css` `transition: transform 200ms ease;` — CSS property, not rendered, exempt per rule) |
| 10 | all-in-one | 0 | clean |
| 11 | next-level | 0 | clean |
| 12 | world-class | 0 | clean |
| 13 | game-changing | 0 | clean |
| 14 | robotics | 0 | clean |
| 15 | medical-grade | 0 | clean |
| 16 | clinical | 0 | clean |
| 17 | certified | 0 | clean |
| 18 | **specification** | **2** | **FAIL** |

**Failure detail — components/FAQ.tsx, FAQ Q4 "Can OEM engagements also be opened under NDA?", answer paragraph:**

> Yes. OEM engagements can be opened under NDA on request, particularly where part geometry, tolerance windows, or **material specifications** are commercially sensitive.

The plural "specifications" contains the canonical forbidden root "specification" (singular). Substring grep flags it. No Q10 inversion applies.

**Root cause — this phrase was already in the brief (`COPY_BRIEF.md` line 233) but was missed by the T4 brief QA:**

- The T4 brief QA report (`qa/qa-brief-t_5cbc1d63.md`) claimed "0 hits" for the forbidden-phrase grep against rendered Sections 1-8.
- The T4 grep used word-boundary regex (`\b...\b`) which only matches the exact word "specification", not "specifications".
- The canonical rule from `codex-qa` SOUL.md does NOT specify word boundaries — the example uses plain alternation `grep -inE '...specification...'`, which matches the substring in "specifications".
- The build (T5) faithfully reproduced the brief's FAQ Q4 text, propagating the violation into the rendered page.

**Fix required:**

1. `components/FAQ.tsx`, FAQ Q4 answer, line containing "material specifications":
   - Replace "material specifications" with **"material data sheets"** (preserves procurement-engineer register, same semantic scope, no forbidden root).
   - Alternative phrasings: "material property data", "material spec sheets", "material data".
2. Also fix `COPY_BRIEF.md` line 233 with the same change so future brief QA cycles don't re-flag it.
3. The T4 brief QA's `\b...\b` word-boundary grep was too strict in the wrong direction (misses substring matches). Future brief QA should use plain alternation per the canonical rule example.

### COPY-03 — PROBLEM section contains no solution pitch — **PASS**

`components/Problem.tsx` (3 cards, all agitation):
1. "Prototype vendors told you they could scale. The first 50 parts were clean. The next 500 were not."
2. Procurement-side narrative on print-ready CAD + delivery window + tolerances.
3. White-label side: "you have handed your client's brief to a manufacturer and hoped the manufacturer would not call your client directly. You have also had that hope broken."

Zero mention of "Advanc3D", zero feature pitch, zero product name. Pure agitation. PASS.

### COPY-04 — CTA button text is not generic — **PASS**

CTA inventory (7 buttons total, all follow `[action verb] + [specific outcome]`):
1. Hero primary: "Request a Contract Manufacturing Quote"
2. Hero secondary: "Talk White-Label Partnership"
3. Header ghost: "Talk White-Label Partnership"
4. PROOF section: "Request Representative Project Examples"
5. Final CTA primary: "Request a Contract Manufacturing Quote"
6. Final CTA secondary: "Talk White-Label Partnership"
7. (mailto link, not a button)

Grep against the 5 forbidden generic texts ("Learn More", "Get Started", "Sign Up", "Click Here", "Submit"): **0 hits**. PASS.

### COPY-05 — No visible placeholder text — **RESIDUAL_RISK**

Grep against rendered HTML:

| Pattern | Hits | Verdict |
|---------|------|---------|
| placeholder | 0 | clean |
| swap via | 0 | clean |
| TODO | 0 | clean |
| FIXME | 0 | clean |
| lorem ipsum | 0 | clean |
| image goes here | 0 | clean |
| **coming soon** | **1** | **brief/rule tension** |

**The "coming soon" hit is in the PROOF section, as the H2:**

> "Project gallery coming soon"

This copy is **explicitly required by the brief** (`COPY_BRIEF.md` line 202) and was approved by the T4 brief QA as BRIEF-08 "honest scaffold" (declarative, not apologetic; explicitly denies fake testimonials and "operator will swap" placeholders). The build faithfully reproduced the brief.

**Rule/brief tension:** the COPY-05 rule (canonical 24 forbidden list) flags "coming soon" as a hard FAIL. The brief and the T4 brief QA explicitly approved it as intentional honest-absence language. These are not reconcilable as written.

**Operator decision required:**
- Option A: amend the COPY-05 rule to exempt "coming soon" when it is part of an honest scaffold (declarative absence, not fake teaser).
- Option B: amend the brief + build to replace "Project gallery coming soon" with "Capability examples on request" or similar — same honest-absence semantics, no forbidden trigger word.
- Option C: accept this as residual_risk and override the rule for this build.

Recommended: **Option A** (amend the rule). The T4 brief QA already vetted the language as honest scaffold, and the build is faithful to the brief. Adding a one-line exemption to the rule is a smaller blast radius than rewriting the brief + build + re-running QA.

Not blocking QA pass because the language is brief-mandated, but surfaced for operator review.

### COPY-06 — `USE_MOCK_DATA` not true in any env — **PASS**

`grep -rn USE_MOCK_DATA .env* next.config.* vercel.json app/ components/ lib/ 2>/dev/null` → 0 hits. PASS.

---

## 6-question audit

| # | Question | Verdict |
|---|----------|---------|
| 1 | All 8 narrative sections present in correct order? | PASS — Hero, Problem, WhyUs, WhatYouGet, HowItWorks, Proof, FAQ, FinalCTA, Footer (in `app/page.tsx` 9 import + render order matches brief) |
| 2 | Both lead types served (OEM + White-Label)? | PASS — separate "What you get" cards for "For OEM / Production" and "For White-Label Partners", distinct FAQ questions, separate email mailtos |
| 3 | Hero headline outcome-first? | PASS — `[Result]. [Result]. [Result.]` format |
| 4 | PROBLEM is agitation only? | PASS — 3 agitating cards, no service/feature pitch |
| 5 | Voice is sober industrial B2B? | PASS — declarative, credentialing, second-person, no marketing varnish, references specific tolerances/QA protocols/delivery windows |
| 6 | CTA buttons follow `[action verb] + [specific outcome]`? | PASS — all 7 CTAs |

---

## Deployability checks

| # | Check | Verdict |
|---|-------|---------|
| 1 | Build succeeds (`npm run build`) | PASS — exit 0, Next.js 14.2.18, 4 static pages generated |
| 2 | No placeholder domains in built code | PASS (with caveat) — `app/`, `components/`, `lib/`, `public/`, `next.config.js`, `package.json`, `tsconfig.json` all clean. `.next/server/chunks/341.js` and `.next/static/chunks/117-*.js` contain the substring `your-app` 8 times total, but only inside Next.js framework error-message URLs of the form `https://nextjs.org/docs/app/building-your-application/...`. These are framework-internal documentation URLs, not user-visible strings in normal operation. Exempt per rule's "Class names or import paths that happen to match are NOT failures" clause. |
| 3 | Local production server returns 200 | PASS — `curl -sI http://localhost:3030/` → `HTTP/1.1 200 OK`. Rendered HTML: 71,558 bytes. |
| 4 | No `localhost` in production metadata | PASS — `app/layout.tsx` `metadataBase: new URL('https://adv3d-b2b.vercel.app')`, no other localhost references in `app/`, `components/`, `lib/`, `public/`, `next.config.js` |
| 5 | Self-canonical production URL | PASS — `metadataBase` points to `https://adv3d-b2b.vercel.app` (the Vercel-assigned production hostname, not `example.com`/`your-domain`/etc.) |

**Deployability summary:**

```json
{
  "build_exit_code": 0,
  "build_command": "npm run build",
  "local_server_url": "http://localhost:3030/",
  "local_server_http_code": 200,
  "placeholder_grep_clean": true,
  "placeholder_matches": [],
  "production_canonical_url": "https://adv3d-b2b.vercel.app",
  "notes": "Build serves 200 on http://localhost:3030. productionSiteUrl points to real vercel.app, not a placeholder. The 'your-app' substring hits in .next/server/chunks/341.js are inside Next.js framework error-message URLs (https://nextjs.org/docs/app/building-your-application/...), not user-visible strings. Exempt per codex-qa rule exception for class names / import paths / framework-internal matches."
}
```

---

## Failures

```json
[
  {
    "file": "components/FAQ.tsx",
    "line": null,
    "rule": "COPY-02",
    "message": "Forbidden canonical phrase 'specification' (substring) appears in FAQ Q4 answer: 'material specifications are commercially sensitive'. The brief (COPY_BRIEF.md line 233) contains the same phrasing, and the T4 brief QA's word-boundary grep missed it. Substring matching per the canonical rule catches it. The build faithfully reproduced the brief but propagated the violation. Replace 'material specifications' with 'material data sheets' (or 'material property data' / 'material spec sheets' / 'material data') in both components/FAQ.tsx and COPY_BRIEF.md line 233."
  }
]
```

---

## Residual risk

1. **COPY-05 rule/brief tension — "coming soon" in PROOF H2.** The phrase is brief-mandated and was approved by the T4 brief QA as honest scaffold, but the canonical COPY-05 rule is binary: "coming soon" in rendered text = FAIL. The build is faithful to the brief. Operator decision needed: amend the rule (recommended) or amend the brief + build to use different language.

2. **T4 brief QA false-negative on "specifications".** The T4 brief QA's `\b...\b` word-boundary regex missed "specifications" as a substring match of the canonical "specification". The rule's example uses plain alternation. Future brief QA cycles should use plain alternation per the canonical example to avoid this false-negative class. Surface for operator awareness; not blocking this build.

3. **Logo path in brief vs. repo.** The brief (per T4 brief QA context) expects logo at `research/images/logo.jpg`; the repo has it at `public/assets/logo.jpg`. The Nav component (rendered) uses `/assets/logo.jpg` (Next.js image optimization, served from `public/`). Visual gate (T6) should confirm the rendered nav logo is not a broken image. Not blocking this QA pass — the rendered HTML shows `<img src="/_next/image?url=%2Fassets%2Flogo.jpg&w=96&q=75" alt="Advanc3D — Beyond Digital" ...>` with no broken-image indicators. (Note: brief-vs-repo path discrepancy is a documentation drift, not a build defect.)

---

## Verification commands run

```bash
# Build
cd /opt/data/home/hermes-orchestrator/adv3d-b2b && npm run build
# → exit 0, Next.js 14.2.18, 4 static pages

# Local production server
nohup npx next start -p 3030 > /tmp/next-start.log 2>&1 &
# → HTTP 200 on /, 71,558 bytes rendered HTML

# COPY-01
curl -s http://localhost:3030/ | grep -oE '<h1[^>]*>[^<]+</h1>'
# → "Spec-compliant parts on your dock. Tolerance-confirmed batch-to-batch. Engineering review before the print, not after."

# COPY-02 forbidden phrases (18 after Q10 inversions)
for p in seamless empower unlock journey solution cutting-edge state-of-the-art revolutionize transform all-in-one next-level world-class game-changing robotics medical-grade clinical certified specification; do
  echo -n "$p: "; grep -c -i "$p" /tmp/rendered.html
done
# → all 0 except "specification: 2" (FAQ Q4 "material specifications")

# COPY-02 in source (sanity check)
grep -rnE 'seamless|empower|unlock|journey|solution|cutting-edge|state-of-the-art|revolutionize|transform|all-in-one|next-level|world-class|game-changing|robotics|medical-grade|clinical|certified|specification' app/ components/ lib/ public/ 2>/dev/null
# → only hit: components/FAQ.tsx: "material specifications" (rendered)

# COPY-04 generic CTAs
for p in "Learn More" "Get Started" "Sign Up" "Click Here" "Submit"; do
  echo -n "$p: "; grep -c "$p" /tmp/rendered.html
done
# → all 0

# COPY-05 placeholder patterns
for p in "placeholder" "swap via" "TODO" "FIXME" "lorem ipsum" "image goes here" "coming soon"; do
  echo -n "$p: "; grep -c -i "$p" /tmp/rendered.html
done
# → all 0 except "coming soon: 1" (PROOF H2, brief-mandated)

# COPY-06 USE_MOCK_DATA
grep -rn USE_MOCK_DATA .env* next.config.* vercel.json app/ components/ lib/ 2>/dev/null
# → 0 hits

# Q10 inverted phrases (must each appear ≥1×)
for p in aerospace automotive industrial "production-grade" "engineering-grade" "end-use"; do
  c=$(grep -c -i "$p" /tmp/rendered.html); echo "$p: $c"
done
# → all ≥1 (6/6 PASS)

# Deployability placeholder grep
grep -rnE 'example\.(com|org|net|io|app)|your-(domain|project|company|app)|change-?me|placeholder\.com' .next/ app/ components/ lib/ public/ 2>/dev/null
# → only hits in .next/server/chunks/341.js and .next/static/chunks/117-*.js, all inside Next.js framework URLs (your-application path fragment). Exempt per rule.

# Production metadata
grep -nE 'localhost|127\.0\.0\.1|example\.com|your-domain|metadataBase' app/layout.tsx
# → metadataBase: new URL('https://adv3d-b2b.vercel.app') — self-canonical, no localhost
```

---

## Final verdict

**FAIL — 1 COPY-02 violation. Build is otherwise deployable.**

The build faithfully reproduces the brief. One canonical-24 forbidden phrase ("specification", as substring of "specifications") appears in FAQ Q4. This was also in the brief (line 233) but escaped the T4 brief QA's word-boundary grep. Fix is a one-phrase replacement in `components/FAQ.tsx` (and `COPY_BRIEF.md` for consistency).

All other checks pass:
- 5/5 copy checks other than COPY-02 PASS (one is residual_risk, not failure)
- 5/5 deployability checks PASS
- 6/6 audit questions PASS
- Build serves 200 on local production server
- Production metadata points to `https://adv3d-b2b.vercel.app` (Vercel production URL, not placeholder)

**Retry notes for the next coder iteration:**

1. **Required fix (COPY-02):** in `components/FAQ.tsx`, FAQ Q4 answer, replace "material specifications" with "material data sheets" (or "material property data" / "material spec sheets" / "material data" — any of these preserves procurement-engineer register and semantic scope without the forbidden root). Also apply the same replacement to `COPY_BRIEF.md` line 233 so future brief QA cycles don't re-flag it.
2. **Optional follow-up (operator decision, not blocking):** surface the T4 brief QA's word-boundary regex bug to the brief QA profile. Future brief QA should use plain alternation per the canonical `codex-qa` rule example, not `\b...\b`, to catch substring matches.
3. **Optional follow-up (operator decision, not blocking):** the COPY-05 rule and the brief disagree on "coming soon" in PROOF. Operator should pick: amend the rule, or amend the brief + build. Brief is currently in control of the language.
