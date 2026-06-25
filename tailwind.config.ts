import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#fafaf7',
          primary: '#d96b1f',
          'primary-hover': '#b85819',
          text: '#0f1419',
          muted: '#5a6168',
          surface: '#ffffff',
          border: 'rgba(15, 20, 25, 0.10)',
        },
        'brand-dark': {
          bg: '#0e0e0c',
          primary: '#ed7a35',
          'primary-hover': '#f18f4f',
          text: '#e8e6e1',
          muted: '#8a8780',
          surface: '#161614',
          border: 'rgba(232, 230, 225, 0.10)',
        },
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        body: ['Satoshi', '"Inter"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        pill: '9999px',
        card: '0.75rem',
        image: '1rem',
      },
      maxWidth: {
        container: '80rem',
      },
    },
  },
  plugins: [],
};

export default config;