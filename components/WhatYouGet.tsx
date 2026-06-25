const oemDeliverables = [
  'Functional prototypes and end-use parts — tolerances confirmed per batch, QA protocols attached',
  'Jigs, fixtures, and tooling for production lines',
  'Custom components across named processes: FDM, SLA, SLS, MJF, powder-bed',
  'Multi-material and multi-durometer assemblies built into a single part where the design supports it',
  'Batch QA documentation, first-article inspection reports, and material certifications on request',
];

const whiteLabelDeliverables = [
  'NDA at intake; partner confidentiality as the default',
  'White-label fulfillment with no co-marketing, no client-facing invoice line items, no direct contact with your customers',
  'Margin-layer partnership: production capacity without competing for your client relationships',
  'Design-for-additive engineering support on intake, including DFM flagging and tolerance confirmation',
  'Spec-compliant output with QA protocols attached for your downstream client reporting',
];

function DeliverableColumn({
  eyebrow,
  heading,
  intro,
  items,
}: {
  eyebrow: string;
  heading: string;
  intro: string;
  items: string[];
}) {
  return (
    <article className="flex h-full flex-col rounded-card border border-black/10 bg-brand-surface p-8 lg:p-10 dark:border-white/10 dark:bg-brand-dark-surface">
      <p className="eyebrow">{eyebrow}</p>
      <h3 className="mt-4 font-display text-2xl leading-tight text-brand-text lg:text-3xl dark:text-brand-dark-text">
        {heading}
      </h3>
      <p className="mt-4 text-base leading-relaxed text-brand-muted dark:text-brand-dark-muted">
        {intro}
      </p>
      <ul className="mt-8 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-base leading-relaxed text-brand-text dark:text-brand-dark-text"
          >
            <span
              aria-hidden="true"
              className="mt-0.5 inline-block flex-shrink-0 font-body text-base leading-6 text-brand-primary dark:text-brand-dark-primary"
            >
              •
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function WhatYouGet() {
  return (
    <section className="py-20 lg:py-28" id="deliverables">
      <div className="container-edge">
        <div className="max-w-3xl">
          <p className="eyebrow">Two engagement tracks</p>
          <h2 className="mt-6 font-display text-3xl leading-tight text-brand-text sm:text-4xl lg:text-5xl dark:text-brand-dark-text">
            What you get
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <DeliverableColumn
            eyebrow="For OEM / Production"
            heading="Production-grade output for OEM and Tier 1 supplier buyers."
            intro="Production-grade additive manufacturing for functional prototypes, end-use parts, jigs, fixtures, tooling, and custom components. Built to spec, delivered on the named delivery window, with QA documentation attached to every batch."
            items={oemDeliverables}
          />
          <DeliverableColumn
            eyebrow="For White-Label Partners"
            heading="White-label fulfillment and design-for-additive partnership."
            intro="Silent production floor for design studios, engineering firms, product-dev agencies, and resellers. NDA at intake. Partner confidentiality as the operating model, not a contract clause."
            items={whiteLabelDeliverables}
          />
        </div>
      </div>
    </section>
  );
}