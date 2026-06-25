export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32" id="contact">
      <div className="container-edge">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl leading-tight text-brand-text sm:text-4xl lg:text-5xl dark:text-brand-dark-text">
            Bring the print-ready file, the tolerance spec, and the delivery window. Get back a quote that names the process, the QA protocol, and the date the parts ship.
          </h2>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:partnerships@advanc3d.com?subject=Contract%20Manufacturing%20Quote%20Request"
              className="inline-flex items-center justify-center rounded-pill bg-brand-primary px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-brand-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary dark:bg-brand-dark-primary dark:hover:bg-brand-dark-primary-hover"
            >
              Request a Contract Manufacturing Quote
            </a>
            <a
              href="mailto:partnerships@advanc3d.com?subject=White-Label%20Partnership%20Inquiry"
              className="inline-flex items-center justify-center rounded-pill border border-brand-text px-7 py-3.5 text-base font-medium text-brand-text transition-colors hover:bg-brand-text hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-text dark:border-brand-dark-text dark:text-brand-dark-text dark:hover:bg-brand-dark-text dark:hover:text-brand-dark-bg"
            >
              Talk White-Label Partnership
            </a>
          </div>

          <p className="mt-8 text-sm text-brand-muted dark:text-brand-dark-muted">
            Or email{' '}
            <a
              href="mailto:partnerships@advanc3d.com"
              className="underline underline-offset-4 hover:text-brand-primary dark:hover:text-brand-dark-primary"
            >
              partnerships@advanc3d.com
            </a>{' '}
            directly.
          </p>
        </div>
      </div>
    </section>
  );
}