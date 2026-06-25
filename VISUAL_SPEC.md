# Visual Spec — Adv3D B2B Contract Manufacturing

**Binding contract** between pre-build design and every downstream worker. Every item is testable without subjective judgment. `minimax-coder` implements against this file. `codex-qa` and `codex-design` verify against this file.

If an item is not in this spec, it is not required. If it is in this spec, it is required.

---

## SECTION A — Tailwind Config Extension

Complete `tailwind.config.ts` `extend` block. All brand colors must resolve from these tokens. No hardcoded hex outside this spec.

```ts
extend: {
  colors: {
    brand: {
      bg: '#fafaf7',                  // warm off-white, industrial print paper
      primary: '#d96b1f',             // industrial orange, B2B-credible
      'primary-hover': '#b85819',    // deeper industrial orange
      text: '#0f1419',                // near-black with cool slate undertone
      muted: '#5a6168',               // cool slate, eyebrow/secondary copy
      surface: '#ffffff',             // card surface
      border: 'rgba(15, 20, 25, 0.10)' // alpha-blended neutral border
    },
    'brand-dark': {
      bg: '#0e0e0c',                  // very dark warm-gray canvas
      primary: '#ed7a35',             // brighter industrial orange (AA contrast)
      'primary-hover': '#f18f4f',
      text: '#e8e6e1',                // warm off-white
      muted: '#8a8780',               // muted warm-gray
      surface: '#161614',             // card surface in dark mode
      border: 'rgba(232, 230, 225, 0.10)'
    }
  },
  fontFamily: {
    display: ['"Instrument Serif"', 'Georgia', 'serif'],
    body: ['Satoshi', '"Inter"', 'system-ui', 'sans-serif']
  },
  borderRadius: {
    'pill': '9999px',
    'card': '0.75rem',    // 12px
    'image': '1rem'       // 16px
  },
  maxWidth: {
    'container': '80rem'  // 1280px
  }
}
```

**Dark-mode pairing rule:** when toggling dark mode, every `bg-brand-*` becomes `bg-brand-dark.*`, every `text-brand-*` becomes `text-brand-dark.*`, every `border-black/10` becomes `border-white/10`. Implement via `dark:` variants on every utility.

---

## SECTION B — Font Loading

Add to `app/layout.tsx` `<head>` (Next.js App Router) or `_document.tsx` (Pages Router). Fontshare is the preferred source.

```html
<link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
<link
  rel="stylesheet"
  href="https://api.fontshare.com/v2/css?f[]=instrument-serif@400,500&f[]=satoshi@400,500,700&display=swap"
/>
```

**Verification:** `grep -r "api.fontshare.com" app/layout.tsx` (or pages equivalent) returns at least one hit. If neither font is available on Fontshare (extremely unlikely — both are core Fontshare faces), fall back to Google Fonts:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500&family=Inter:wght@400;500;700&display=swap"
/>
```

With `tailwind.config.ts` updated to `display: ['Fraunces', 'Georgia', 'serif']` and `body: ['Inter', 'system-ui', 'sans-serif']`.

---

## SECTION C — Component Specs

### C1 — Primary CTA button
**Tailwind class string:** `inline-flex items-center justify-center rounded-pill bg-brand-primary px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-brand-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary dark:bg-brand-dark-primary dark:hover:bg-brand-dark-primary-hover`

**Constraints:**
- Solid `bg-brand-primary` ONLY. No gradients. No background images.
- Pill shape (`rounded-pill`).
- Hover state darkens to `brand-primary-hover`.
- Min tap target 44×44px (current `px-7 py-3.5` = ~48px tall ✓).
- Disabled state: `opacity-50 cursor-not-allowed`.

### C2 — Secondary / ghost button
**Tailwind class string:** `inline-flex items-center justify-center rounded-pill border border-brand-text px-7 py-3.5 text-base font-medium text-brand-text transition-colors hover:bg-brand-text hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-text dark:border-brand-dark-text dark:text-brand-dark-text dark:hover:bg-brand-dark-text dark:hover:text-brand-dark-bg`

**Constraints:**
- Outline only (1px border). No fill. No gradient.
- Hover inverts (dark fill, light text).
- Same pill radius as primary for visual parity.

### C3 — Navigation bar
**Tailwind class string:** `sticky top-0 z-50 w-full border-b border-black/10 bg-brand-bg/80 backdrop-blur-md dark:border-white/10 dark:bg-brand-dark-bg/80`

**Structural constraints:**
- Sticky on scroll.
- Initial state: transparent-ish with backdrop blur. After 24px scroll, add `bg-brand-bg dark:bg-brand-dark-bg` solid (scroll state via small client component or `useScroll` if using Framer Motion).
- Dark mode toggle on the right side of nav (sun/moon icon button). Required component.
- Logo on the left.
- Center: minimal nav (anchor links to each section: Capabilities, Process, FAQ).
- Right: secondary CTA "Explore White-Label Partnership" (ghost button).
- Mobile (<768px): hamburger → drawer.

### C4 — Hero section layout
**Grid structure:** `grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start`

**Column split:**
- Text block: `lg:col-span-7` (≈58%)
- Image: `lg:col-span-5` (≈42%)

**Constraints:**
- MUST be 2-column asymmetric on `lg+`. NOT centered-everything.
- Text block contains (top-to-bottom): eyebrow (kicker), H1 headline (outcome-first, `[Result]. [Result]. [Result.]`), subhead (one sentence), CTA pair (primary + secondary).
- Eyebrow: `text-sm font-medium uppercase tracking-[0.18em] text-brand-muted dark:text-brand-dark-muted`.
- H1: `font-display text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight text-brand-text dark:text-brand-dark-text`.
- Subhead: `mt-6 text-lg lg:text-xl leading-relaxed text-brand-muted dark:text-brand-dark-muted`.
- CTA pair: `mt-10 flex flex-col sm:flex-row gap-4`.
- Image: `rounded-image shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)] object-cover w-full h-auto`.
- Section padding: `py-24 lg:py-32 xl:py-40` (most generous — hero gets the most breathing room).

### C5 — Feature / credential section layout (WHY US)
**Grid structure:** `grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8`

**Asymmetric layout — 2+2 with one full-width callout:**
- Top row: 2 cards (col-span-6 each) — 4 cards total
- The 4th credential (most defensible — e.g., "Multi-Process Production Floor") extends to full-width `lg:col-span-12` as a callout block with a larger feature image on one side and copy on the other.

**Constraints:**
- NO `grid-cols-3` with three equal items.
- Each card: `rounded-card border border-black/10 bg-brand-surface p-8 dark:border-white/10 dark:bg-brand-dark-surface`.
- Card heading: `font-display text-2xl lg:text-3xl leading-tight text-brand-text dark:text-brand-dark-text`.
- Card body: `mt-4 text-base leading-relaxed text-brand-muted dark:text-brand-dark-muted`.
- NO icons inside colored circles as card decoration.
- NO colored left-border accent on cards.

### C6 — Two-track WHAT YOU GET layout
**Grid structure:** `grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12`

**Constraints:**
- 2-column symmetric is ALLOWED here (two parallel tracks is the design intent; not a 3-column features grid).
- Left column titled for OEMs; right column for white-label partners.
- Each column has: sub-eyebrow ("For OEM / Production" / "For White-Label Partners"), heading, intro paragraph, and a 4-5 item bulleted deliverable list.
- Deliverable list uses `text-base text-brand-text dark:text-brand-dark-text` with a small marker (• or →) — NOT icons in circles.
- Section padding: `py-20 lg:py-28`.

### C7 — Process / HOW IT WORKS layout
**Grid structure:** `grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8`

**Constraints:**
- 4 process steps as numbered articles, vertical stack on mobile, 2×2 on desktop.
- Each article: large number `text-5xl font-display text-brand-primary dark:text-brand-dark-primary` + heading `font-display text-xl lg:text-2xl text-brand-text` + body `text-base text-brand-muted`.
- Article container: `rounded-card border border-black/10 bg-brand-surface p-8 dark:border-white/10 dark:bg-brand-dark-surface`.
- Section padding: `py-16 lg:py-20` (TIGHTER than hero / proof — per locked spec).

### C8 — PROOF section (scaffold, honest absence)
**Grid structure:** single full-width callout block `max-w-4xl mx-auto`.

**Constraints:**
- One card: `rounded-card border border-black/10 bg-brand-surface p-10 lg:p-16 dark:border-white/10 dark:bg-brand-dark-surface`.
- Centered text inside.
- Heading: "Project gallery coming soon" (declarative, not apologetic).
- Body: 2 sentences explaining honest absence + invitation to contact for representative project types / capability examples.
- Optional: small CTA "Request Representative Project Examples" (secondary button).
- Section padding: `py-32 lg:py-40` (MOST breathing room per locked spec — even scaffold sections breathe).
- NO fake testimonials. NO lorem-ipsum. NO invented client logos. NO "operator will swap" placeholders.

### C9 — FAQ section layout
**Grid structure:** `grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12`

**Constraints:**
- Single-column accordion list (no two-column FAQ split).
- 5-7 questions, each as `<details>`/`<summary>` or Radix/shadcn Accordion.
- Question: `font-display text-lg lg:text-xl text-brand-text dark:text-brand-dark-text`.
- Answer: `mt-3 text-base leading-relaxed text-brand-muted dark:text-brand-dark-muted`.
- Container: `divide-y divide-black/10 dark:divide-white/10` for the list.
- Section padding: `py-16 lg:py-20` (tightest — FAQ runs tight per locked spec).

### C10 — FINAL CTA section layout
**Grid structure:** single column, centered container `max-w-3xl mx-auto text-center`.

**Constraints:**
- One stakes sentence: `font-display text-3xl lg:text-5xl leading-tight text-brand-text dark:text-brand-dark-text`.
- Primary CTA button (solid, centered).
- Secondary escape hatch below (text link or ghost button): "or email partnerships@advanc3d.com directly".
- Section padding: `py-24 lg:py-32`.

### C11 — Card style (universal)
**Standard card classes:** `rounded-card border border-black/10 bg-brand-surface p-8 dark:border-white/10 dark:bg-brand-dark-surface`

**Hard rules:**
- NO colored left-border accents (`border-l-4 border-orange-500` is FORBIDDEN).
- NO icons inside colored circles.
- NO heavy drop shadows. Subtle: `shadow-sm` allowed; `shadow-xl` / `shadow-2xl` FORBIDDEN on cards.
- Border color: alpha-blended neutral (`border-black/10` light, `border-white/10` dark) — NOT solid `border-gray-200`.

### C12 — Section spacing rhythm (REQUIRED variance)
- HERO: `py-24 lg:py-32 xl:py-40`
- PROBLEM: `py-20 lg:py-28`
- WHY US: `py-20 lg:py-28`
- WHAT YOU GET: `py-20 lg:py-28`
- HOW IT WORKS: `py-16 lg:py-20` (tight)
- PROOF: `py-32 lg:py-40` (loosest)
- FAQ: `py-16 lg:py-20` (tightest)
- FINAL CTA: `py-24 lg:py-32`

**No two adjacent sections should have identical padding.** The visual gate will fail any build where three or more consecutive sections use the same `py-*` value.

---

## SECTION D — Section Order Checklist

**Exact order, locked. No additions, no reordering, no removals.**

1. **HERO** — Outcome-first headline `[Result]. [Result]. [Result.]` + audience subhead + primary CTA "Request a Contract Manufacturing Quote" + secondary CTA "Explore White-Label Partnership". MUST be 2-column asymmetric (text left, image right). MUST NOT be centered-everything. MUST NOT pitch a feature — outcome only.

2. **THE PROBLEM** — Agitates B2B sourcing pain ONLY. No solution pitch. No mention of WHY US / WHAT YOU GET content. Uses procurement-grade vocabulary. Ends with reader feeling seen, not sold to.

3. **WHY US** — Production discipline + engineering-first intake + multi-process floor + white-label discretion + US-based production. 4 credential blocks in 2+1+1 asymmetric layout (per C5). Named technologies (FDM, SLA, SLS, MJF, multi-durometer) appear here.

4. **WHAT YOU GET** — Two-column track split (per C6). OEM column + White-Label column, each with 4-5 concrete deliverables in that track's vocabulary. The ONLY section that materially diverges by buyer track.

5. **HOW IT WORKS** — 4 numbered steps: submit → engineering review → manufacture & QA → delivery. References QA documentation, tolerance confirmation, lead times, delivery windows by name. Tightest section padding.

6. **PROOF** — Honest scaffold. Single full-width callout. "Project gallery coming soon — contact us for representative project types and capability examples." No fake testimonials, no lorem-ipsum, no invented metrics. Most generous section padding.

7. **FAQ** — 5-7 questions addressing: (a) quality consistency / run-to-run variance, (b) capacity / scalability at Tier 1 volumes, (c) confidentiality / IP / NDA (white-label), (d) NDA process (OEM), (e) MOQ / lead times / materials library. Single-column accordion. Tightest section padding.

8. **FINAL CTA** — One stakes sentence + primary CTA + secondary escape hatch (email or phone). Centered container.

---

## SECTION E — Image Slot Manifest

**Operator-provided logo already downloaded:** `/opt/data/home/hermes-orchestrator/adv3d-b2b/research/images/logo.jpg` (verified by `ls` 2026-06-24).

**All other image slots will be downloaded by `minimax-researcher` (parallel card T2) to `research/images/<slot>.<ext>` (local files, no hotlinking).**

If researcher cannot supply a slot, the build must fall back to an honest text placeholder (e.g., a labeled empty `<div>` with the slot name), NOT a stock-image hotlink. **No hotlinking — period.**

```
hero-image:           /research/images/hero-1.jpg          # Industrial FDM/SLA machine in production-floor setting
logo:                 /research/images/logo.jpg             # PROVIDED — Advanc3D parent logo (downloaded 2026-06-24)
why-us-callout-img:   /research/images/capability-1.jpg     # Multi-process / multi-material process shot
proof-fallback:       /research/images/proof-1.jpg          # OPTIONAL — only if researcher supplies; otherwise omitted
```

**Image sourcing policy (per `research/.image-preflight.json`):**
- Pixabay primary (`https://pixabay.com/api/?key=$KEY&q=...`)
- Pexels fallback (`https://api.pexels.com/v1/search?query=...`)
- User-Agent: `Mozilla/5.0` (required — Python `urllib` returns 403 from Pexels)
- Banned: `images.unsplash.com` direct URLs, `source.unsplash.com`, `cdn.pixabay.com` raw URLs

**Image treatment (when rendered):** all product/process images use `rounded-image shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)] object-cover w-full h-auto`.

**Dark-mode images:** no special treatment required. Images render with neutral shadow in both modes.

---

## SECTION F — Binary QA Checklist

The visual gate runs against this list item by item. Every item is objectively verifiable.

**Foundation (must pass first):**
- [ ] F01. No `bg-gradient` on any button (`grep -r "bg-gradient" app/ components/ 2>/dev/null` returns 0)
- [ ] F02. No 3-column symmetric feature grid (`grep -r "grid-cols-3" app/ components/` returns 0, OR all hits use `lg:col-span-*` overrides to break symmetry)
- [ ] F03. No icons inside colored circle backgrounds (`grep -r "rounded-full.*bg-" app/ components/` reviewed — only button hits allowed, no `bg-brand-primary rounded-full p-3` icon container hits)
- [ ] F04. No colored left-border accents on cards (`grep -r "border-l-4" app/ components/` returns 0)
- [ ] F05. Hero is 2-column asymmetric layout (visual inspection: text left, image right, NOT centered-everything)
- [ ] F06. Hero headline is outcome-first `[Result]. [Result]. [Result.]` format (visual inspection: 3 short clauses, each a falsifiable claim)

**Content (per locked spec):**
- [ ] F07. Section order matches SECTION D exactly (visual inspection: HERO → PROBLEM → WHY US → WHAT YOU GET → HOW IT WORKS → PROOF → FAQ → FINAL CTA in this order)
- [ ] F08. CTA button text is action + outcome (no "Learn More", no "Get Started", no "Click Here"; primary CTA is "Request a Contract Manufacturing Quote")
- [ ] F09. PROOF section is honest scaffold (no fake testimonials, no lorem-ipsum, no invented client logos, no "operator will swap" placeholder text)
- [ ] F10. FAQ has 5-7 questions (count `<details>` or accordion items — outside the [5,7] range = FAIL)
- [ ] F11. Body copy left-aligned (hero headline excepted; "text-center" on hero H1 OK; everywhere else text should be left-aligned by default)
- [ ] F12. No forbidden phrases from intake Q10 appear in rendered copy (canonical 24 forbidden list; Q10 inversions aerospace/automotive/industrial/production-grade/engineering-grade/end-use EXEMPT and REQUIRED — at least one of each appears)
- [ ] F13. At least 3 of the Q7 audience-vocabulary terms appear in rendered copy (case-insensitive substring match — goal is authenticity)

**Technical:**
- [ ] F14. Dark mode toggle present in nav and functional (click toggle, page re-renders with `dark` class on `<html>`, canvas flips to `bg-brand-dark.bg`)
- [ ] F15. Both modes pass WCAG AA contrast (manual check: brand.text on brand.bg, brand-dark.text on brand-dark.bg — both ≥ 4.5:1)
- [ ] F16. Fontshare CDN links present in layout `<head>` (`grep -r "api.fontshare.com" app/layout.tsx` returns ≥ 1)
- [ ] F17. Tailwind config contains brand color tokens from SECTION A (`grep -E "brand:|brand-dark:" tailwind.config.ts` returns ≥ 10 hits)
- [ ] F18. All image slots filled with real assets OR honest text placeholder (no `<img>` with `placeholder.com`, no hotlinked stock URLs)
- [ ] F19. `USE_MOCK_DATA` is not set to true in any env config (`grep -r "USE_MOCK_DATA=true" .` returns 0, excluding `.env.example`)
- [ ] F20. No localhost in production metadata (`grep -r "localhost" .` reviewed — only `next.config.js` dev hints allowed, no production metadata hits)

**Visual rhythm:**
- [ ] F21. Section padding varies (verify C12 — no three consecutive sections share the same `py-*` value)
- [ ] F22. Cards have alpha-blended borders `border-black/10` light, `border-white/10` dark (not solid `border-gray-200` or `border-gray-300`)
- [ ] F23. Card radius is `rounded-card` (12px), buttons are `rounded-pill` (9999px) — no `rounded-md` cards, no `rounded-sm` buttons
- [ ] F24. Logo asset at `research/images/logo.jpg` resolves with HTTP 200 in rendered page (visual inspection — logo visible in nav, no broken-image icon)

**TOTAL: 24 binary items.** Visual gate verdict = PASS if all 24 pass; FAIL if any fails.

---

## SECTION G — Acceptance summary (recap)

**Files produced by this design phase:** `BRAND_DIRECTION.md` + `VISUAL_SPEC.md`.

**Downstream worker contracts:**
- `minimax-coder` (T5) — implements against this file. Reads BRAND_DIRECTION.md for tone/vocabulary context.
- `codex-qa` (T7) — runs SECTION F programmatically + visual review.
- `codex-design` visual gate (T6) — runs SECTION F item by item against the live build, produces `design/visual-qa.md`.
- `vercel-deploy` (T8) — gated on T6 + T7 both passing.

**Reference snapshot for visual gate:** `/opt/data/profiles/codex-design/browser_screenshots/browser_screenshot_02cca8ba.png` (hero) and `/opt/data/profiles/codex-design/browser_screenshots/browser_screenshot_3846474d.png` (mid-page feature cards). Compare B2B build against these for family-affinity confirmation.
