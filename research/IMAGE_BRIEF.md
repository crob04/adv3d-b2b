# Image Brief — adv3d-b2b

**Date:** 2026-06-24
**Source brief:** `/opt/data/builds/advanc3d-b2b/brief.md`
**Validated images:** `research/VALIDATED_IMAGES.md`
**This file:** maps each image to its 8-section landing-page slot. Designer (`codex-design`) and coder (`minimax-coder`) read this to wire images into `VISUAL_SPEC.md SECTION E` and into the page.

---

## Image-to-section mapping

| Section | Image | Why this image | Alt text (use verbatim) |
|---------|-------|----------------|--------------------------|
| **HERO (1)** | `images/hero.jpg` | Gantry robotic system on a clean factory floor — establishes the "this is a real production operation" tone before a single word is read. Sober, large-scale industrial. | "Industrial gantry robotic material handling system in a clean factory floor." |
| **THE PROBLEM (2)** | — (no image) | Per the v4 narrative pattern, this section is text-only. Agitation copy, not imagery. | — |
| **WHY US (3)** | `images/qa.jpg` (QA / verification) | Closes the quality-consistency objection (Q8 #1) with a concrete signal: someone in a workshop is measuring a part with a real caliper. Far more convincing than a stock "quality" icon. | "Craftsman using a vernier caliper to measure a part in a workshop." |
| **WHAT YOU GET (4)** | `images/fdm.jpg`, `images/sla.jpg`, `images/sls.jpg`, `images/multimaterial.jpg` | The 4 capability cards (FDM / SLA / SLS / multi-material / multi-process). One photo per card, ideally with a short caption tying the visual to the capability. | fdm: "Close-up of a 3D printer nozzle operating in a workshop." · sla: "Interior of a modern enclosed 3D printer." · sls: "High-contrast macro of a 3D printer toolhead with calibration sensor." · multimaterial: "Industrial factory floor with rows of CNC machining centers." |
| **HOW IT WORKS (5)** | (optional) `images/multimaterial.jpg` as a section background | The 4-step process (submit → engineering review → manufacture & QA → delivery) pairs naturally with a factory-floor visual as a soft section background. If the designer chooses a flat background for this section instead, drop the image. | "Industrial factory floor with rows of CNC machining centers." |
| **PROOF (6)** | (scaffold) | **No real case studies or testimonials exist.** Per brief, this section is an honest scaffold: "Project gallery coming soon — contact us for representative project types and capability examples." If a visual is required, reuse `images/qa.jpg` as a soft, neutral "capability" image. **Do NOT invent partner logos.** | — |
| **FAQ (7)** | (none) | Text-only. | — |
| **FINAL CTA (8)** | (none — focus on CTAs) | Text-only; the operator logo and primary/secondary CTAs carry the section. | — |

**Throughout (header + footer):** `images/logo.jpg` (Advanc3D "Beyond Digital" wordmark). Per brief, this is the operator-provided brand asset.

---

## 8-section layout reference (v4 narrative, locked per brief §"Required sections / pages")

```
┌────────────────────────────────────────────────┐
│  HEADER: logo (logo.jpg)                       │
├────────────────────────────────────────────────┤
│  1. HERO        [hero.jpg]                     │
│                 Headline + primary CTA         │
├────────────────────────────────────────────────┤
│  2. THE PROBLEM  (text only)                   │
├────────────────────────────────────────────────┤
│  3. WHY US       [qa.jpg]                      │
│                 Three pillars of differentiation│
├────────────────────────────────────────────────┤
│  4. WHAT YOU GET [fdm | sla | sls | multmtrl]  │
│                 Capability cards (4)           │
├────────────────────────────────────────────────┤
│  5. HOW IT WORKS  (optional factory floor bg)  │
│                 4-step process                 │
├────────────────────────────────────────────────┤
│  6. PROOF         (honest scaffold, text only) │
├────────────────────────────────────────────────┤
│  7. FAQ           (text only)                  │
├────────────────────────────────────────────────┤
│  8. FINAL CTA     (text only, 2 CTAs)          │
├────────────────────────────────────────────────┤
│  FOOTER: logo + contact                        │
└────────────────────────────────────────────────┘
```

---

## Notes for the designer / coder

- **Do NOT hotlink.** Every image reference in the production site must point to a local path under `public/assets/` (or equivalent). Per skill rule, Pexels/Pixabay/Unsplash/any external image host must NOT be added to `next.config.js` `images.remotePatterns`. The `local_path` values in `VALIDATED_IMAGES.md` are workspace-relative (`research/images/...`); the coder should copy them to `public/assets/` during build.
- **Aspect ratios:** all 6 stock images are landscape, 6000×4000 → downloaded as ~1920×1280 (Pexels compresses to fit). Hero is 433 KB. Use `object-fit: cover` with a `min-height` to ensure layout stability.
- **All images are JPEG.** No PNG, no SVG, no animation.
- **Logo placement:** the Advanc3D logo is the operator's brand mark. The brief explicitly says use it. It is high-contrast (black + orange) on white background — works on both light and dark section backgrounds with appropriate contrast handling.
- **Tone check:** the vision-analyze audit confirmed all 6 stock images are "sober factory / precision-engineering / QA" — they are NOT playful, NOT lifestyle, NOT consumer-cute. Brief requirement met.
- **Image count budget:** 6 stock images + 1 logo = 7 image files, ~1.5 MB total. Reasonable for a single landing page.

---

## Open questions for designer

- **Hero crop:** the gantry-robot image (hero.jpg) is busy. Designer may want to crop to a clean gantry-only region, or use `object-position` to put the robot at the right third. Designer decides.
- **Process-step icons:** the 4-step process (HOW IT WORKS) may want small icons (not images) — designer decides whether to source icons or use numbered typography.
- **Section dividers:** if the designer wants decorative section dividers, no additional images are needed; use color/typography.
