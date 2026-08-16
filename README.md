# Advanc3D — B2B Contract Manufacturing

Landing page for Adv3D's B2B contract-manufacturing and white-label digital-foundry services. Built to procurement-grade specifications: editorial serif display, industrial orange, dark-mode-aware, all copy written for senior procurement engineers and design-studio principals — not for hobbyists.

## Stack

- Next.js 14 (App Router) + React 18
- TypeScript
- Tailwind CSS 3 (with brand tokens from `tailwind.config.ts`)
- Fonts: Instrument Serif (display) + Satoshi (body), loaded from Fontshare

## Sections (in locked order)

1. Hero — outcome-first headline `[Result]. [Result]. [Result.]`
2. The Problem — procurement-grade agitation
3. Why Us — production discipline + engineering intake + white-label discretion + multi-process floor
4. What You Get — two-track split (OEM + White-Label)
5. How It Works — four numbered steps
6. Proof — honest scaffold (project gallery coming soon)
7. FAQ — six procurement questions
8. Final CTA — primary + secondary + escape-hatch email

## Local development

```bash
npm install
npm run dev      # development server
npm run build    # production build
npm start        # serve production build
```

## Analytics

Set `NEXT_PUBLIC_GA_ID` in Vercel to enable the Google Analytics 4 tag. The tag is omitted when the variable is unset.

## Source-of-truth documents

- `COPY_BRIEF.md` — binding copy contract (hero through final CTA)
- `VISUAL_SPEC.md` — design tokens, layout rules, QA checklist
- `BRAND_DIRECTION.md` — voice, tone, audience vocabulary
