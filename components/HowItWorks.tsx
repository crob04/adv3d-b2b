const steps = [
  {
    number: '01',
    heading: 'Send your files and intake brief.',
    body: 'Send your print-ready CAD (STEP, IGES, or native) with quantities, target tolerances, material requirements, and the delivery window you are working against. White-label engagements start with an NDA at intake; OEM engagements can also be opened under NDA on request. Engineering review is scheduled within one business day.',
  },
  {
    number: '02',
    heading: 'Engineering review with DFM flagging.',
    body: 'Design-for-additive review confirms wall thicknesses, material selection, tolerance feasibility, and lead times against your delivery window. If a part will not hold the spec, you hear it before the print job starts. The returned quote names the processes, the batch QA protocol, and the date the parts ship.',
  },
  {
    number: '03',
    heading: 'Manufacture and QA per batch.',
    body: 'Parts are produced on a multi-process floor — FDM, SLA, SLS, MJF, multi-durometer — and measured on the bench at every batch. Dimensional accuracy, surface finish, and material performance are documented per batch. Production yield is held at the level named in the quote. QA protocols and material certifications travel with the parts.',
  },
  {
    number: '04',
    heading: 'Delivery on the named window.',
    body: 'Parts ship with batch QA documentation, first-article inspection reports on request, and traceability through every production run. Repeatable output, run-to-run, so the next batch lands with the same spec. Subsequent batches re-use the same engineering review record to keep lead times short on repeat orders.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 lg:py-20" id="process">
      <div className="container-edge">
        <div className="max-w-3xl">
          <p className="eyebrow">Process</p>
          <h2 className="mt-6 font-display text-3xl leading-tight text-brand-text sm:text-4xl lg:text-5xl dark:text-brand-dark-text">
            How it works
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-card border border-black/10 bg-brand-surface p-8 dark:border-white/10 dark:bg-brand-dark-surface"
            >
              <span
                aria-hidden="true"
                className="block font-display text-5xl text-brand-primary dark:text-brand-dark-primary"
              >
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-xl text-brand-text lg:text-2xl dark:text-brand-dark-text">
                {step.heading}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-brand-muted dark:text-brand-dark-muted">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}