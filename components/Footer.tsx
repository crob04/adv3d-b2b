export default function Footer() {
  return (
    <footer className="border-t border-black/10 py-12 dark:border-white/10">
      <div className="container-edge flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <p className="font-display text-lg text-brand-text dark:text-brand-dark-text">
          Advanc3D
        </p>
        <p className="text-sm text-brand-muted dark:text-brand-dark-muted">
          Contract manufacturing for OEM sourcing and digital foundry partners. United States.
        </p>
      </div>
    </footer>
  );
}