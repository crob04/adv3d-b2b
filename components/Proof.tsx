export default function Proof() {
  return (
    <section className="py-32 lg:py-40" id="proof">
      <div className="container-edge">
        <div className="mx-auto max-w-4xl rounded-card border border-black/10 bg-brand-surface p-10 text-center lg:p-16 dark:border-white/10 dark:bg-brand-dark-surface">
          <p className="eyebrow">Capabilities track record</p>
          <h2 className="mt-6 font-display text-3xl leading-tight text-brand-text sm:text-4xl lg:text-5xl dark:text-brand-dark-text">
            Project gallery coming soon
          </h2>
          <p className="mt-6 text-base leading-relaxed text-brand-muted lg:text-lg dark:text-brand-dark-muted">
            Advanc3D is opening a dedicated contract-manufacturing track, and a public project gallery is being built out. We do not show fake testimonials or invented case studies here. If you would like representative project types and capability examples for your application — automotive, aerospace, industrial, appliance, consumer goods — request them on the engineering call. We will show you what we have shipped, with the tolerances, materials, and delivery windows it shipped under.
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-pill border border-brand-text px-7 py-3.5 text-base font-medium text-brand-text transition-colors hover:bg-brand-text hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-text dark:border-brand-dark-text dark:text-brand-dark-text dark:hover:bg-brand-dark-text dark:hover:text-brand-dark-bg"
            >
              Request Representative Project Examples
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}