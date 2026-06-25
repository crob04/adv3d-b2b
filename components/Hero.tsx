import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-12 pb-24 lg:pb-32 xl:pb-40 lg:pt-16"
    >
      <div className="container-edge">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 lg:items-start">
          <div className="lg:col-span-7">
            <p className="eyebrow">
              Contract manufacturing for OEM sourcing and digital foundry partners
            </p>
            <h1 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-brand-text sm:text-5xl lg:text-6xl xl:text-7xl dark:text-brand-dark-text">
              Spec-compliant parts on your dock. Tolerance-confirmed batch-to-batch. Engineering review before the print, not after.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-brand-muted lg:text-xl dark:text-brand-dark-muted">
              Production-grade additive manufacturing and white-label digital foundry for OEM sourcing teams and design studios — engineering review at intake, tolerance-confirmed output, NDA available on request.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-pill bg-brand-primary px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-brand-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary dark:bg-brand-dark-primary dark:hover:bg-brand-dark-primary-hover"
              >
                Request a Contract Manufacturing Quote
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-pill border border-brand-text px-7 py-3.5 text-base font-medium text-brand-text transition-colors hover:bg-brand-text hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-text dark:border-brand-dark-text dark:text-brand-dark-text dark:hover:bg-brand-dark-text dark:hover:text-brand-dark-bg"
              >
                Talk White-Label Partnership
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-image shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)] dark:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.55)]">
              <Image
                src="/assets/hero.jpg"
                alt="Industrial automated gantry system on a clean factory floor."
                width={960}
                height={1100}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}