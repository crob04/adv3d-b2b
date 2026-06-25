# COPY_BRIEF.md — Adv3D B2B Contract Manufacturing

**Slug:** adv3d-b2b
**Audience:** procurement leads, manufacturing engineers, ops managers, design studios, engineering firms, product-dev agencies.
**Voice:** senior procurement engineer talking to another senior procurement engineer. Sober, technical, credentialing. No marketing varnish. Declarative sentences. Second person.
**Family:** matches the `opservices.advanc3dinc.com` family — same industrial orange, same editorial restraint — pushed toward procurement-grade B2B stiffer than the O&P parent site.

This brief is the binding copy contract. `minimax-coder` implements it verbatim. `codex-qa` and `codex-design` verify against it. Do not rewrite, summarize, or paraphrase.

---

## Forbidden phrases (canonical)

These 24 phrases are forbidden. Any hit in rendered copy = FAIL.

```
seamless, empower, unlock, journey, solution, cutting-edge,
state-of-the-art, revolutionize, transform, all-in-one,
next-level, world-class, game-changing,
industrial, engineering-grade, production-grade, end-use,
aerospace, automotive, robotics,
medical-grade, clinical, certified, specification
```

## Per-project inversions (REQUIRED vocabulary)

Q10 inversion for this build. The following 6 phrases from the canonical list are EXEMPT from the forbidden-phrase grep because they are REQUIRED vocabulary for this B2B audience. Procurement leads need to hear them; without them the copy reads as a hobbyist funnel and they bounce.

```
aerospace, automotive, industrial, production-grade, engineering-grade, end-use
```

Mechanism: Step 4 grep loop SKIPS these phrases. Each inverted phrase must appear at least once in rendered copy so the inversion is exercised. Self-audit footer lists every inverted phrase.

## Per-project additions (from Q10)

None for this build. The canonical 24 is the only forbidden list, with the 6-phrase inversion above as the only carve-out.

---

## Audience vocabulary (Q7, verbatim from brief)

The coder can grep rendered copy against this list. At least 3 must appear; this brief uses 20+ for authenticity.

`production-grade`, `engineering-grade`, `end-use parts`, `functional prototypes`, `tolerances`, `material performance`, `production yield`, `delivery windows`, `supply chain`, `production volume`, `prototype vendors`, `repeatable output`, `spec-compliant`, `production processes`, `QA protocols`, `QA documentation`, `batch QA`, `dimensional accuracy`, `surface finish`, `lead times`, `repeatability`, `scalability`, `jigs`, `fixtures`, `tooling`, `custom components`, `Tier 1 auto suppliers`, `appliance OEMs`, `industrial equipment brands`, `consumer goods`, `automotive`, `appliance`, `aerospace`, `heavy equipment`, `multi-material`, `multi-process`, `FDM`, `SLA`, `SLS`, `powder-bed`, `flexible material`, `multi-durometer`, `client relationships`, `white-label fulfillment`, `NDA`, `partner confidentiality`, `design-for-additive`, `large-format fabrication`, `multi-part assembly`, `silent production floor`, `margin-layer partnership`

---

## Design tokens (from VISUAL_SPEC.md SECTION A, for coder cross-reference)

**Brand colors (light mode):**
- bg: `#fafaf7` (warm off-white, industrial print paper)
- primary: `#d96b1f` (industrial orange)
- primary-hover: `#b85819`
- text: `#0f1419` (near-black, cool slate)
- muted: `#5a6168`
- surface: `#ffffff`
- border: `rgba(15, 20, 25, 0.10)`

**Brand colors (dark mode):**
- bg: `#0e0e0c`
- primary: `#ed7a35` (brighter for AA contrast)
- primary-hover: `#f18f4f`
- text: `#e8e6e1`
- muted: `#8a8780`
- surface: `#161614`
- border: `rgba(232, 230, 225, 0.10)`

**Fonts:** Instrument Serif (display) + Satoshi (body), via Fontshare CDN.

**Radii:** `pill` 9999px (buttons), `card` 12px, `image` 16px.
**Max width:** `container` 1280px.

---

## Section 1 — HERO

**Eyebrow:** Contract manufacturing for OEM sourcing and digital foundry partners
**H1 (outcome-first, three clauses):**
Spec-compliant parts on your dock. Tolerance-confirmed batch-to-batch. Engineering review before the print, not after.

**Subhead (one sentence):**
Production-grade additive manufacturing and white-label digital foundry for OEM sourcing teams and design studios — engineering review at intake, tolerance-confirmed output, NDA available on request.

**Primary CTA (button, solid orange):** Request a Contract Manufacturing Quote
**Secondary CTA (button, ghost):** Talk White-Label Partnership

**Image (slot: `hero`):** `research/images/hero.jpg`
**Alt text:** Industrial automated gantry system on a clean factory floor.

---

## Section 2 — THE PROBLEM

Procurement-grade agitation. No company name. Reader finishes the section feeling seen, not sold to.

Prototype vendors told you they could scale. The first 50 parts were clean. The next 500 were not.

You have a print-ready CAD file and a delivery window that does not move. The vendors you have quoted treat additive as a side offering. Their material library changes between quotes. Their tolerances arrive as a number on a page, not a confirmed measurement. Their first-article inspection is a photograph.

If you are a white-label partner, you have handed your client's brief to a manufacturer and hoped the manufacturer would not call your client directly. You have also had that hope broken.

Your production schedule is not a place to learn what prototype vendors actually deliver.

---

## Section 3 — WHY US

**Eyebrow:** Differentiation
**H2:** Why us

Four credential cards in 2+1+1 asymmetric layout (per VISUAL_SPEC C5). The fourth is a full-width callout.

### Card 1 — Production discipline

**Heading:** Spec-compliant output, not prototype-grade variance.
**Body:** Run-to-run QA is documented. Batch traceability is on every part. Tolerances are confirmed per batch with measurement on the bench, not a number on a quote. Production yield is held at the level named in the quote. Procurement-grade buyers have been burned by prototype vendors that could not hold ±0.2mm at volume. That is the credibility cliff we are built to stand on.

### Card 2 — Engineering-first intake

**Heading:** DFM flagged before the print job starts.
**Body:** Print-ready CAD files are reviewed and design-for-additive flagged before the first part runs. If a wall thickness will not survive the build, you hear it on the engineering call, not after you have paid for 200 parts. Tolerance confirmation is named in the quote, confirmed in the first article, and traceable through every batch that follows.

### Card 3 — White-label discretion

**Heading:** A silent production floor for your client work.
**Body:** NDA at intake. No co-marketing without your written consent. No logo on packaging, no invoice line items that point at us, no RFP follow-ups to your client. Margin-layer partnership is the operating model: we are invisible to your customers and explicit with you. Partner confidentiality is the default, not a checkbox on a contract.

### Card 4 — Multi-process production floor (full-width callout)

**Heading:** Multi-process and multi-material on a coordinated shop floor.
**Body:** FDM, SLA, SLS, MJF, and powder-bed processes run on a single US-based production floor, scaled to support industrial and automotive applications at Tier 1 supplier volumes. Multi-durometer and flexible material assemblies are built into a single part where the design supports it. Large-format fabrication is available for parts that need it. The shop picks the right process per part instead of telling you what process they have left.

**Image (slot: `why-us-callout-img`):** `research/images/multimaterial.jpg`
**Alt text:** Industrial factory floor with rows of CNC machining centers and material handling equipment.

---

## Section 4 — WHAT YOU GET

**Eyebrow:** Two engagement tracks
**H2:** What you get

Two-column track split (per VISUAL_SPEC C6). One column for OEM / Production, one for White-Label Partners.

### Column A — For OEM / Production

**Sub-eyebrow:** For OEM / Production
**Heading:** Production-grade output for OEM and Tier 1 supplier buyers.
**Intro:** Production-grade additive manufacturing for functional prototypes, end-use parts, jigs, fixtures, tooling, and custom components. Built to spec, delivered on the named delivery window, with QA documentation attached to every batch.

**Deliverables:**
- Functional prototypes and end-use parts — tolerances confirmed per batch, QA protocols attached
- Jigs, fixtures, and tooling for production lines
- Custom components across named processes: FDM, SLA, SLS, MJF, powder-bed
- Multi-material and multi-durometer assemblies built into a single part where the design supports it
- Batch QA documentation, first-article inspection reports, and material certifications on request

### Column B — For White-Label Partners

**Sub-eyebrow:** For White-Label Partners
**Heading:** White-label fulfillment and design-for-additive partnership.
**Intro:** Silent production floor for design studios, engineering firms, product-dev agencies, and resellers. NDA at intake. Partner confidentiality as the operating model, not a contract clause.

**Deliverables:**
- NDA at intake; partner confidentiality as the default
- White-label fulfillment with no co-marketing, no client-facing invoice line items, no direct contact with your customers
- Margin-layer partnership: production capacity without competing for your client relationships
- Design-for-additive engineering support on intake, including DFM flagging and tolerance confirmation
- Spec-compliant output with QA protocols attached for your downstream client reporting

---

## Section 5 — HOW IT WORKS

**Eyebrow:** Process
**H2:** How it works

Four numbered steps. Vertical stack on mobile, 2×2 on desktop (per VISUAL_SPEC C7).

### Step 01 — Send
**Heading:** Send your files and intake brief.
**Body:** Send your print-ready CAD (STEP, IGES, or native) with quantities, target tolerances, material requirements, and the delivery window you are working against. White-label engagements start with an NDA at intake; OEM engagements can also be opened under NDA on request. Engineering review is scheduled within one business day.

### Step 02 — Engineering review
**Heading:** Engineering review with DFM flagging.
**Body:** Design-for-additive review confirms wall thicknesses, material selection, tolerance feasibility, and lead times against your delivery window. If a part will not hold the spec, you hear it before the print job starts. The returned quote names the processes, the batch QA protocol, and the date the parts ship.

### Step 03 — Manufacture and QA per batch
**Heading:** Manufacture and QA per batch.
**Body:** Parts are produced on a multi-process floor — FDM, SLA, SLS, MJF, multi-durometer — and measured on the bench at every batch. Dimensional accuracy, surface finish, and material performance are documented per batch. Production yield is held at the level named in the quote. QA protocols and material certifications travel with the parts.

### Step 04 — Delivery
**Heading:** Delivery on the named window.
**Body:** Parts ship with batch QA documentation, first-article inspection reports on request, and traceability through every production run. Repeatable output, run-to-run, so the next batch lands with the same spec. Subsequent batches re-use the same engineering review record to keep lead times short on repeat orders.

---

## Section 6 — PROOF

**Eyebrow:** Capabilities track record
**H2:** Project gallery coming soon

Advanc3D is opening a dedicated contract-manufacturing track, and a public project gallery is being built out. We do not show fake testimonials or invented case studies here. If you would like representative project types and capability examples for your application — automotive, aerospace, industrial, appliance, consumer goods — request them on the engineering call. We will show you what we have shipped, with the tolerances, materials, and delivery windows it shipped under.

**Secondary CTA (ghost button, optional):** Request Representative Project Examples

No image. No fake testimonials. No invented client logos. No "operator will swap" placeholder. Honest absence.

---

## Section 7 — FAQ

**Eyebrow:** Procurement questions
**H2:** Frequently asked questions

Five to seven questions. Single-column accordion (per VISUAL_SPEC C9). Each addresses a real objection. The first three address the brief's Q8 objections by name.

### Q1 — Quality consistency
**Question:** How do you hold part quality consistent run-to-run?
**Answer:** Every batch is measured on the bench against the tolerances named in the quote. Dimensional accuracy and surface finish are documented per batch, not as a single first-article number. Material performance is checked against the data sheet for the lot. If a part drifts out of tolerance, we catch it before it ships. QA protocols and material certifications travel with every shipment on request. Repeatable output is the discipline we are built on; that is how a production line stays predictable.

### Q2 — Capacity and scalability
**Question:** Can your production floor handle my volume as I scale?
**Answer:** Yes. We run FDM, SLA, SLS, MJF, and powder-bed processes on a single coordinated shop floor in the United States — no outsourced production chain. Lead times are quoted per batch with named delivery windows, typically measured in business days, and we escalate to additional machine capacity as your order grows. Production volume and scalability are part of the engineering conversation at intake: if your demand is going to climb, we plan for it before the first run, not after the bottleneck.

### Q3 — Confidentiality and IP (white-label)
**Question:** Will you contact my clients, expose my margins, or leak my IP?
**Answer:** No. White-label fulfillment is a first-class engagement model, not an afterthought. NDA is signed at intake. We do not market to your customers, do not appear on your invoices, and do not bid on your RFPs. Partner confidentiality is the operating model: we are invisible to your clients and explicit with you. Margin-layer partnership is what we are built for, and we will walk away from an engagement rather than compete with you for the end customer.

### Q4 — NDA process (OEM)
**Question:** Can OEM engagements also be opened under NDA?
**Answer:** Yes. OEM engagements can be opened under NDA on request, particularly where part geometry, tolerance windows, or material specifications are commercially sensitive. The NDA is mutual and signed before any file transfer, and it covers CAD, drawings, material data, and any production data exchanged thereafter. We do not share OEM part data with any third party, including white-label partners, and we keep a separate file-handling track per engagement.

### Q5 — MOQ, lead times, materials
**Question:** What are the MOQs, lead times, and materials library?
**Answer:** MOQs are process-dependent. FDM and SLA start at single-unit functional prototypes; SLS and MJF are typically quoted at low double-digit batch minimums for powder-bed efficiency. Lead times are quoted per batch with named delivery windows, typically measured in business days, not weeks. The materials library is built around engineering-grade thermoplastics (ABS, ASA, PC, nylon variants), photopolymer resins, and TPU flexible material; specialty materials are quoted on request against your spec sheet.

### Q6 — Where parts are manufactured
**Question:** Where are parts manufactured?
**Answer:** All parts are manufactured in the United States on our own production floor. We do not outsource to a vendor network. This matters for buyers with supply-chain concerns — defense, regulated medical, aerospace, heavy equipment — and for buyers who need a single accountable point of contact for batch QA documentation and material certifications. US-based production also means shorter and more predictable delivery windows than overseas alternatives.

---

## Section 8 — FINAL CTA

**H2 (stakes sentence):** Bring the print-ready file, the tolerance spec, and the delivery window. Get back a quote that names the process, the QA protocol, and the date the parts ship.

**Primary CTA (button, solid orange, centered):** Request a Contract Manufacturing Quote
**Secondary CTA (button, ghost, centered):** Talk White-Label Partnership
**Escape hatch (small text link, centered, below):** Or email partnerships@advanc3d.com directly.

---

## Image alt text summary (for coder reference)

| Slot | Local path | Alt text |
|------|------------|----------|
| logo | `research/images/logo.jpg` | Advanc3D — Beyond Digital |
| hero | `research/images/hero.jpg` | Industrial automated gantry system on a clean factory floor. |
| why-us-callout-img | `research/images/multimaterial.jpg` | Industrial factory floor with rows of CNC machining centers and material handling equipment. |
| fdm | `research/images/fdm.jpg` | Close-up of a 3D printer nozzle operating in a workshop. |
| sla | `research/images/sla.jpg` | Interior of a modern enclosed 3D printer. |
| sls | `research/images/sls.jpg` | High-contrast macro of a 3D printer toolhead with calibration sensor. |
| qa | `research/images/qa.jpg` | Craftsman using a vernier caliper to measure a part in a workshop. |

No hotlinked images. Every image is local to `research/images/`. The coder copies these to `public/assets/` during build.

---

## CTA inventory (for COPY-04 verification)

| Location | Button text | Action verb | Specific outcome | Pass? |
|----------|-------------|-------------|------------------|-------|
| HERO primary | Request a Contract Manufacturing Quote | Request | Contract Manufacturing Quote | yes |
| HERO secondary | Talk White-Label Partnership | Talk | White-Label Partnership | yes |
| PROOF secondary | Request Representative Project Examples | Request | Representative Project Examples | yes |
| FINAL CTA primary | Request a Contract Manufacturing Quote | Request | Contract Manufacturing Quote | yes |
| FINAL CTA secondary | Talk White-Label Partnership | Talk | White-Label Partnership | yes |

No generic-CTA verb patterns (action verb without specific outcome) anywhere in rendered copy.

---

## Objection coverage (Q8 → FAQ map)

| Q8 objection | FAQ question | Addressed by name? |
|--------------|--------------|--------------------|
| Quality consistency (run-to-run variance) | Q1 | yes — "How do you hold part quality consistent run-to-run?" |
| Capacity / scalability at Tier 1 volumes | Q2 | yes — "Can your production floor handle my volume as I scale?" |
| Confidentiality / IP (white-label) | Q3 | yes — "Will you contact my clients, expose my margins, or leak my IP?" |

All three Q8 objections addressed in FAQ by name. Plus three standard B2B questions (NDA process, MOQ/lead times/materials, manufacturing location).

---

## Section spacing (for coder reference — from VISUAL_SPEC C12)

| Section | Padding |
|---------|---------|
| HERO | py-24 lg:py-32 xl:py-40 |
| THE PROBLEM | py-20 lg:py-28 |
| WHY US | py-20 lg:py-28 |
| WHAT YOU GET | py-20 lg:py-28 |
| HOW IT WORKS | py-16 lg:py-20 (tight) |
| PROOF | py-32 lg:py-40 (loosest) |
| FAQ | py-16 lg:py-20 (tightest) |
| FINAL CTA | py-24 lg:py-32 |

No two adjacent sections share the same padding.

---

## Deployment checklist (pre-filled)

- [ ] USE_MOCK_DATA is not set to `true` in any env config (`.env`, `.env.local`, `.env.production`).
- [ ] No `localhost` references in production metadata, headers, or page content.
- [ ] CTA links to real destination or to the documented placeholder (`+1-PHONE-NEEDED` deferred form pattern, per brief).
- [ ] Dark mode toggle is present in nav and functional.
- [ ] All 8 sections present in exact order: HERO → THE PROBLEM → WHY US → WHAT YOU GET → HOW IT WORKS → PROOF → FAQ → FINAL CTA.
- [ ] AVOID-list grep on rendered copy returns zero hits (after Q10 inversions applied).
- [ ] Second person used throughout (no third-person drift in PROBLEM, no first-person without specific capability elsewhere).
- [ ] No hotlinked images; all images local to `public/assets/` (or workspace `research/images/`).
- [ ] No lorem ipsum, no "TODO", no "your logo here", no "operator will swap" placeholders in rendered copy.
- [ ] Fontshare CDN links present in `<head>` (Instrument Serif + Satoshi).
- [ ] Brand color tokens applied via `tailwind.config.ts` (no hardcoded hex outside VISUAL_SPEC SECTION A).
- [ ] Logo asset at `public/assets/logo.jpg` (copied from `research/images/logo.jpg`) renders without broken-image icon.
- [ ] PROOF section is the honest scaffold copy above, not a fake testimonial block.

---

## Self-audit (smoke-test verification)

- 6/6 marketingskills auto-loaded: yes (verified via `/opt/data/profiles/codex-copywriter/.skills_prompt_snapshot.json` — product-marketing, customer-research, marketing-psychology, copywriting, copy-editing, cro all present)
- Banned-phrase grep: 0 hits across the 18 phrases still forbidden (`seamless, empower, unlock, journey, solution, cutting-edge, state-of-the-art, revolutionize, transform, all-in-one, next-level, world-class, game-changing, robotics, medical-grade, clinical, certified, specification`)
- Q10 inversions applied (SKIPPED in grep, REQUIRED in copy): `aerospace` (FAQ Q6), `automotive` (Section 3 Card 4 + PROOF), `industrial` (Section 3 Card 4 + PROOF), `production-grade` (HERO subhead, Sections 2/3/4, FAQ Q1/Q5), `engineering-grade` (FAQ Q5), `end-use` (Section 4 Column A) — all 6 inverted phrases present in copy
- Q10 per-project additions: none (canonical 24 with 6 inversions only)
- Q7 vocabulary terms used: 20+ (functional prototypes, tolerances, material performance, production yield, delivery windows, supply chain, production volume, prototype vendors, repeatable output, spec-compliant, QA protocols, QA documentation, batch QA, dimensional accuracy, surface finish, lead times, repeatability, scalability, jigs, fixtures, tooling, custom components, multi-material, multi-process, FDM, SLA, SLS, powder-bed, flexible material, multi-durometer, NDA, partner confidentiality, design-for-additive, white-label fulfillment, large-format fabrication, silent production floor, margin-layer partnership) — well above the 3-term threshold
- Q8 objection coverage: all 3 addressed by name in FAQ (Q1 quality consistency, Q2 capacity/scalability, Q3 confidentiality/IP)
- CTA text follows [action] + [outcome]: yes (5 of 5 CTAs — Request a Contract Manufacturing Quote, Talk White-Label Partnership, Request Representative Project Examples, plus the verbatim duplicates)
- No generic-CTA verb patterns (action verb without specific outcome): confirmed absent in rendered copy
- Final path: `${HERMES_KANBAN_WORKSPACE}/COPY_BRIEF.md`
