import Image from 'next/image';

export default function WhyUs() {
  return (
    <section className="py-20 lg:py-28" id="capabilities">
      <div className="container-edge">
        <div className="max-w-3xl">
          <p className="eyebrow">Differentiation</p>
          <h2 className="mt-6 font-display text-3xl leading-tight text-brand-text sm:text-4xl lg:text-5xl dark:text-brand-dark-text">
            Why us
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Card 1 — Production discipline */}
          <article className="rounded-card border border-black/10 bg-brand-surface p-8 lg:col-span-6 dark:border-white/10 dark:bg-brand-dark-surface">
            <h3 className="font-display text-2xl leading-tight text-brand-text lg:text-3xl dark:text-brand-dark-text">
              Spec-compliant output, not prototype-grade variance.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-brand-muted dark:text-brand-dark-muted">
              Run-to-run QA is documented. Batch traceability is on every part. Tolerances are confirmed per batch with measurement on the bench, not a number on a quote. Production yield is held at the level named in the quote. Procurement-grade buyers have been burned by prototype vendors that could not hold ±0.2mm at volume. That is the credibility cliff we are built to stand on.
            </p>
          </article>

          {/* Card 2 — Engineering-first intake */}
          <article className="rounded-card border border-black/10 bg-brand-surface p-8 lg:col-span-6 dark:border-white/10 dark:bg-brand-dark-surface">
            <h3 className="font-display text-2xl leading-tight text-brand-text lg:text-3xl dark:text-brand-dark-text">
              DFM flagged before the print job starts.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-brand-muted dark:text-brand-dark-muted">
              Print-ready CAD files are reviewed and design-for-additive flagged before the first part runs. If a wall thickness will not survive the build, you hear it on the engineering call, not after you have paid for 200 parts. Tolerance confirmation is named in the quote, confirmed in the first article, and traceable through every batch that follows.
            </p>
          </article>

          {/* Card 3 — White-label discretion */}
          <article className="rounded-card border border-black/10 bg-brand-surface p-8 lg:col-span-6 dark:border-white/10 dark:bg-brand-dark-surface">
            <h3 className="font-display text-2xl leading-tight text-brand-text lg:text-3xl dark:text-brand-dark-text">
              A silent production floor for your client work.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-brand-muted dark:text-brand-dark-muted">
              NDA at intake. No co-marketing without your written consent. No logo on packaging, no invoice line items that point at us, no RFP follow-ups to your client. Margin-layer partnership is the operating model: we are invisible to your customers and explicit with you. Partner confidentiality is the default, not a checkbox on a contract.
            </p>
          </article>

          {/* Card 4 — Multi-process callout (full-width on lg) */}
          <article className="overflow-hidden rounded-card border border-black/10 bg-brand-surface lg:col-span-12 dark:border-white/10 dark:bg-brand-dark-surface">
            <div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
              <div className="p-8 lg:col-span-7 lg:p-12">
                <h3 className="font-display text-2xl leading-tight text-brand-text lg:text-3xl dark:text-brand-dark-text">
                  Multi-process and multi-material on a coordinated shop floor.
                </h3>
                <p className="mt-4 text-base leading-relaxed text-brand-muted lg:text-lg dark:text-brand-dark-muted">
                  FDM, SLA, SLS, MJF, and powder-bed processes run on a single US-based production floor, scaled to support industrial and automotive applications at Tier 1 supplier volumes. Multi-durometer and flexible material assemblies are built into a single part where the design supports it. Large-format fabrication is available for parts that need it. The shop picks the right process per part instead of telling you what process they have left.
                </p>
              </div>
              <div className="relative min-h-[260px] lg:col-span-5 lg:min-h-[420px]">
                <Image
                  src="/assets/multimaterial.jpg"
                  alt="Industrial factory floor with rows of CNC machining centers and material handling equipment."
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}