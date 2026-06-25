# VALIDATED IMAGES — adv3d-b2b research track

**Date:** 2026-06-24  
**Status:** 6 of 6 image slots filled, all on local disk, all B2B-appropriate  
**Source policy:** Pexels primary (per `image-search` skill) — Pixabay was rate-limited (500/500 used) at start of this run; Pexels had 8000/hr available and was used for the final selections.

---

## Slot → file mapping

| Slot | File | Size | Source | Photographer | License | License URL | Visual content (verified) |
|------|------|------|--------|--------------|---------|-------------|---------------------------|
| **logo** | `images/logo.jpg` | 34,629 B | Operator-supplied (advanc3dinc.com) | Advanc3D Inc. | Brand asset | `https://advanc3dinc.com/wp-content/uploads/2023/04/Advanced3D-jpg-LogoSmall-CROP.jpg` | "Advanced 3D — Beyond Digital" wordmark, bold italic angular black + orange. Used in nav + footer. |
| **hero** | `images/hero.jpg` | 433,427 B | Pexels (id 34222005) | Pexels (search: industrial robot arm factory) | Pexels License (free for commercial use, attribution not required) | `https://www.pexels.com/photo/automated-factory-conveyor-system-in-operation-34222005/` | "Kraft Handling Technology" gantry robotic system in a clean factory floor — large white/red gantry with vacuum lifting, safety enclosure, HMI control station, conveyors. Sober industrial B2B tone. |
| **fdm** | `images/fdm.jpg` | 222,125 B | Pexels (id 4485456) | Pexels (search: 3d printer nozzle workshop) | Pexels License | `https://www.pexels.com/photo/3d-printer-in-a-workshop-4485456/` | Close-up of a 3D printer nozzle operating in a workshop setting — shallow DOF, mechanical detail. |
| **sla** | `images/sla.jpg` | 157,311 B | Pexels (id 20877042) | Pexels (search: 3d printer interior) | Pexels License | `https://www.pexels.com/photo/3d-printer-in-shadow-20877042/` | Interior of an enclosed 3D printer (Bamboo Lab X1 Carbon / Creality K1-style) — CoreXY belts, drag chain, part-cooling fan, dark moody aesthetic. |
| **sls** | `images/sls.jpg` | 135,929 B | Pexels (id 20877039) | Pexels (search: 3d printer extrusion head) | Pexels License | `https://www.pexels.com/photo/close-up-of-3d-printer-20877039/` | High-contrast macro of 3D printer toolhead with "AI LIDAR" sensor, copper linear rails, calibration graphic on glossy bed. Black background. |
| **qa** | `images/qa.jpg` | 165,465 B | Pexels (id 7180823) | Pexels (search: caliper measurement) | Pexels License | `https://www.pexels.com/photo/man-using-a-caliper-to-measure-an-item-in-a-workshop-7180823/` | Craftsman in red turtleneck + green work apron using a vernier caliper to measure a part. Workshop setting. PERFECT for QA / verification messaging. |
| **multimaterial** | `images/multimaterial.jpg` | 417,148 B | Pexels (id 34718922) | Pexels (search: factory floor machinery) | Pexels License | `https://www.pexels.com/photo/industrial-factory-floor-with-machinery-and-crates-34718922/` | Vast industrial manufacturing facility floor — rows of CNC machining centers, polished concrete, red wire-mesh storage cages, yellow safety lines, worker in distance. |

**Total: 7 files, 1.5 MB on disk.**

---

## Image file manifest (machine-readable for downstream `minimax-coder`)

```json
{
  "logo":         { "local_path": "research/images/logo.jpg",         "alt": "Advanc3D — Beyond Digital",                                        "source_url": "https://advanc3dinc.com/wp-content/uploads/2023/04/Advanced3D-jpg-LogoSmall-CROP.jpg", "source_origin": "operator-supplied" },
  "hero":         { "local_path": "research/images/hero.jpg",         "alt": "Industrial gantry robotic material handling system in a clean factory floor", "source_url": "https://images.pexels.com/photos/34222005/pexels-photo-34222005.jpeg", "source_origin": "Pexels", "pexels_id": 34222005, "license": "Pexels License" },
  "fdm":          { "local_path": "research/images/fdm.jpg",          "alt": "Close-up of a 3D printer nozzle operating in a workshop",          "source_url": "https://images.pexels.com/photos/4485456/pexels-photo-4485456.jpeg",       "source_origin": "Pexels", "pexels_id": 4485456,  "license": "Pexels License" },
  "sla":          { "local_path": "research/images/sla.jpg",          "alt": "Interior of a modern enclosed 3D printer",                          "source_url": "https://images.pexels.com/photos/20877042/pexels-photo-20877042.jpeg",   "source_origin": "Pexels", "pexels_id": 20877042, "license": "Pexels License" },
  "sls":          { "local_path": "research/images/sls.jpg",          "alt": "High-contrast macro of a 3D printer toolhead with calibration sensor", "source_url": "https://images.pexels.com/photos/20877039/pexels-photo-20877039.jpeg",   "source_origin": "Pexels", "pexels_id": 20877039, "license": "Pexels License" },
  "qa":           { "local_path": "research/images/qa.jpg",           "alt": "Craftsman using a vernier caliper to measure a part in a workshop",  "source_url": "https://images.pexels.com/photos/7180823/pexels-photo-7180823.jpeg",       "source_origin": "Pexels", "pexels_id": 7180823,  "license": "Pexels License" },
  "multimaterial":{ "local_path": "research/images/multimaterial.jpg","alt": "Industrial factory floor with rows of CNC machining centers",        "source_url": "https://images.pexels.com/photos/34718922/pexels-photo-34718922.jpeg",   "source_origin": "Pexels", "pexels_id": 34718922, "license": "Pexels License" }
}
```

---

## Verification status

| Check | Result |
|-------|--------|
| All files present on disk (`ls research/images/`) | **PASS** — 7 files, sizes 34 KB → 433 KB |
| All JPEGs (FF D8 FF magic-byte check) | **PASS** — 7 / 7 |
| Visual tone matches "industrial, sober, B2B-appropriate — NOT playful" | **PASS** — all 6 Pexels images reviewed via vision_analyze; all confirmed factory/precision-engineering/QA tone. Logo is the operator's own brand mark, retained per brief. |
| Hotlinking avoided (all referenced as `local_path` in downstream `VISUAL_SPEC.md` / page) | **PASS** — every image downloaded to `research/images/`, no external host required at render time |
| No banned sources (Unsplash direct / Source API / cdn.pixabay raw) | **PASS** — all Pexels License, all via Pexels search API with API key |

---

## Honest gaps / known issues

- **Fictiv.com not researched** — its homepage is a JavaScript SPA that returned only a 5,479-byte shell via curl. Not blocking (4-of-5 competitor set is sufficient), but a static blog or `about` page could enrich the analysis in a follow-up.
- **Hubs.com is now Protolabs Network** — the page is a 404 (Hubs redirected to Protolabs Network). The extracted text is actually the Protolabs Network page. Treated as a single competitor in the analysis.
- **Pexels attribution is not legally required** under the Pexels License, but downstream workers are welcome to credit photographers in `<figcaption>` if desired (artist names not stored in this manifest; available via `https://www.pexels.com/photo/<id>/`).
- **The Advanc3D parent logo has a "motorsport/gaming" visual register** per the vision analysis; this is the operator's brand identity, not a research finding. The brief is explicit that this logo is to be used.

---

## Notes for `codex-copywriter` / `minimax-coder`

- The `local_path` values above are workspace-relative (resolved from `HERMES_KANBAN_WORKSPACE` / `/opt/data/home/hermes-orchestrator/adv3d-b2b/`).
- Slot names are stable — `VISUAL_SPEC.md SECTION E` should reference these exact names.
- Per skill rule: do NOT add Pexels / Pixabay / Unsplash / any external image host to `next.config.js` `images.remotePatterns`. Production images are local.
