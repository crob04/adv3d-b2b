export default function Problem() {
  return (
    <section className="py-20 lg:py-28" id="problem">
      <div className="container-edge">
        <div className="max-w-3xl">
          <p className="eyebrow">Sourcing pain</p>
          <h2 className="mt-6 font-display text-3xl leading-tight text-brand-text sm:text-4xl lg:text-5xl dark:text-brand-dark-text">
            Your production schedule is not a place to learn what prototype vendors actually deliver.
          </h2>
        </div>

        <div className="mt-12 grid max-w-4xl grid-cols-1 gap-6 lg:gap-8">
          <div className="rounded-card border border-black/10 bg-brand-surface p-8 dark:border-white/10 dark:bg-brand-dark-surface">
            <p className="font-display text-xl leading-snug text-brand-text dark:text-brand-dark-text">
              Prototype vendors told you they could scale. The first 50 parts were clean. The next 500 were not.
            </p>
          </div>

          <div className="rounded-card border border-black/10 bg-brand-surface p-8 dark:border-white/10 dark:bg-brand-dark-surface">
            <p className="text-base leading-relaxed text-brand-muted dark:text-brand-dark-muted">
              You have a print-ready CAD file and a delivery window that does not move. The vendors you have quoted treat additive as a side offering. Their material library changes between quotes. Their tolerances arrive as a number on a page, not a confirmed measurement. Their first-article inspection is a photograph.
            </p>
          </div>

          <div className="rounded-card border border-black/10 bg-brand-surface p-8 dark:border-white/10 dark:bg-brand-dark-surface">
            <p className="text-base leading-relaxed text-brand-muted dark:text-brand-dark-muted">
              If you are a white-label partner, you have handed your client&apos;s brief to a manufacturer and hoped the manufacturer would not call your client directly. You have also had that hope broken.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}