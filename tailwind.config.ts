import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Luxury warm palette — the DNA of the brand
        ivory: {
          50:  '#FEFCF9',
          100: '#FAF7F2',  // page background
          200: '#F3EDE3',
          300: '#EAE0D0',
          400: '#DDD0BA',
        },
        sandstone: {
          50:  '#FAF5EC',
          100: '#F0E8D8',
          200: '#E0D0B8',
          300: '#D0B898',
          400: '#C4A882',  // primary accent
          500: '#B5956E',
          600: '#9A7A54',  // darker accent
          700: '#7D6040',
          800: '#5C4428',
        },
        bronze: {
          300: '#D4B870',
          400: '#C4A850',
          500: '#B09035',
          600: '#8B6B35',  // CTA buttons
          700: '#6B5028',
          800: '#4A3618',
        },
        charcoal: {
          50:  '#F9F9F9',
          100: '#F0F0F0',
          200: '#E0E0E0',
          300: '#C0C0C0',
          400: '#909090',
          500: '#606060',
          600: '#404040',
          700: '#2D2D2D',
          800: '#1C1C1E',  // headings
          900: '#0A0A0A',
        },
        warmgray: {
          100: '#F5F0EB',
          200: '#EAE3DA',
          300: '#D8CFC5',
          400: '#C0B5A8',
          500: '#9B9080',
          600: '#7A7060',
          700: '#5A5248',
          800: '#3A3530',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', '"Times New Roman"', 'serif'],
        sans:  ['var(--font-sans)',  'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['clamp(3rem, 6vw, 5.5rem)',  { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-xl':  ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'display-lg':  ['clamp(2rem, 4vw, 3.5rem)',   { lineHeight: '1.12', letterSpacing: '-0.02em' }],
        'display-md':  ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.18', letterSpacing: '-0.015em' }],
        'display-sm':  ['clamp(1.5rem, 2.5vw, 2rem)',  { lineHeight: '1.25', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
      },
      maxWidth: {
        '8xl': '90rem',
        '9xl': '100rem',
      },
      animation: {
        marquee:       'marquee 35s linear infinite',
        'marquee-slow':'marquee 55s linear infinite',
        float:         'float 4s ease-in-out infinite',
        'fade-up':     'fadeUp 0.7s ease forwards',
        shimmer:       'shimmer 2.5s linear infinite',
        'spin-slow':   'spin 8s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        luxury:       '0 4px 32px rgba(28, 28, 30, 0.08)',
        'luxury-md':  '0 8px 40px rgba(28, 28, 30, 0.12)',
        'luxury-lg':  '0 16px 64px rgba(28, 28, 30, 0.18)',
        bronze:       '0 4px 24px rgba(139, 107, 53, 0.25)',
        'bronze-lg':  '0 12px 48px rgba(139, 107, 53, 0.35)',
        card:         '0 2px 12px rgba(28, 28, 30, 0.06)',
        'card-hover': '0 12px 48px rgba(28, 28, 30, 0.14)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config
