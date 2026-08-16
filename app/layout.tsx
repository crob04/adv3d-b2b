import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Nav from '@/components/Nav';

const gaId = process.env.NEXT_PUBLIC_GA_ID?.trim();

export const metadata: Metadata = {
  title: 'Advanc3D — Contract Manufacturing for OEM and White-Label Partners',
  description:
    'Production-grade additive manufacturing and white-label digital foundry for OEM sourcing teams and design studios. Engineering review at intake, tolerance-confirmed output, NDA available on request.',
  metadataBase: new URL('https://adv3d-b2b.vercel.app'),
  openGraph: {
    title: 'Advanc3D — Contract Manufacturing for OEM and White-Label Partners',
    description:
      'Production-grade additive manufacturing and white-label digital foundry for OEM sourcing teams and design studios.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeBootstrapScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=instrument-serif@400,500&f[]=satoshi@400,500,700&display=swap"
        />
        <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
      </head>
      <body className="min-h-screen bg-brand-bg text-brand-text dark:bg-brand-dark-bg dark:text-brand-dark-text">
        <Nav />
        <main>{children}</main>
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
