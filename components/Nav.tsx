'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const navLinks = [
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#process', label: 'Process' },
  { href: '#faq', label: 'FAQ' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Read current dark state on mount
    const isDark = document.documentElement.classList.contains('dark');
    setDark(isDark);

    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.add('dark');
      try {
        localStorage.setItem('theme', 'dark');
      } catch {}
    } else {
      document.documentElement.classList.remove('dark');
      try {
        localStorage.setItem('theme', 'light');
      } catch {}
    }
  };

  const navBackground = scrolled
    ? 'bg-brand-bg dark:bg-brand-dark-bg'
    : 'bg-brand-bg/80 dark:bg-brand-dark-bg/80';

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-black/10 backdrop-blur-md transition-colors duration-200 dark:border-white/10 ${navBackground}`}
    >
      <div className="container-edge flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/assets/logo.jpg"
            alt="Advanc3D — Beyond Digital"
            width={36}
            height={36}
            className="h-9 w-9 rounded-full object-cover"
          />
          <span className="font-display text-xl tracking-tight text-brand-text dark:text-brand-dark-text">
            Advanc3D
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-brand-text transition-colors hover:text-brand-primary dark:text-brand-dark-text dark:hover:text-brand-dark-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleDark}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-pill border border-black/10 text-brand-text transition-colors hover:bg-black/5 dark:border-white/10 dark:text-brand-dark-text dark:hover:bg-white/5"
          >
            {dark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center rounded-pill border border-brand-text px-5 py-2 text-sm font-medium text-brand-text transition-colors hover:bg-brand-text hover:text-white dark:border-brand-dark-text dark:text-brand-dark-text dark:hover:bg-brand-dark-text dark:hover:text-brand-dark-bg"
          >
            Talk White-Label Partnership
          </a>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-pill border border-black/10 text-brand-text dark:border-white/10 dark:text-brand-dark-text md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/10 bg-brand-bg dark:border-white/10 dark:bg-brand-dark-bg md:hidden">
          <nav className="container-edge flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-card px-3 py-2 text-sm font-medium text-brand-text hover:bg-black/5 dark:text-brand-dark-text dark:hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-pill border border-brand-text px-5 py-2.5 text-sm font-medium text-brand-text dark:border-brand-dark-text dark:text-brand-dark-text"
            >
              Talk White-Label Partnership
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}