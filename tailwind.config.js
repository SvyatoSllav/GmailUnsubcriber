/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        border: 'var(--color-border)', /* light gray */
        input: 'var(--color-input)', /* white */
        ring: 'var(--color-ring)', /* coral */
        background: 'var(--color-background)', /* white */
        foreground: 'var(--color-foreground)', /* dark blue-gray */
        primary: {
          DEFAULT: 'var(--color-primary)', /* coral */
          foreground: 'var(--color-primary-foreground)' /* white */
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* chrome blue */
          foreground: 'var(--color-secondary-foreground)' /* white */
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* red */
          foreground: 'var(--color-destructive-foreground)' /* white */
        },
        muted: {
          DEFAULT: 'var(--color-muted)', /* light gray */
          foreground: 'var(--color-muted-foreground)' /* medium gray */
        },
        accent: {
          DEFAULT: 'var(--color-accent)', /* orange */
          foreground: 'var(--color-accent-foreground)' /* white */
        },
        popover: {
          DEFAULT: 'var(--color-popover)', /* white */
          foreground: 'var(--color-popover-foreground)' /* dark blue-gray */
        },
        card: {
          DEFAULT: 'var(--color-card)', /* white */
          foreground: 'var(--color-card-foreground)' /* dark blue-gray */
        },
        success: {
          DEFAULT: 'var(--color-success)', /* green */
          foreground: 'var(--color-success-foreground)' /* white */
        },
        warning: {
          DEFAULT: 'var(--color-warning)', /* coral */
          foreground: 'var(--color-warning-foreground)' /* white */
        },
        error: {
          DEFAULT: 'var(--color-error)', /* red */
          foreground: 'var(--color-error-foreground)' /* white */
        }
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
      },
      boxShadow: {
        'primary': '0 4px 12px rgba(255, 107, 107, 0.15)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
      },
      transitionDuration: {
        '250': '250ms',
      },
      transitionTimingFunction: {
        'out': 'ease-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      zIndex: {
        '50': '50',
        '100': '100',
        '1000': '1000',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
}