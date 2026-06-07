/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gh: {
          bg: 'rgb(var(--gh-bg) / <alpha-value>)',
          surface: 'rgb(var(--gh-surface) / <alpha-value>)',
          border: 'rgb(var(--gh-border) / <alpha-value>)',
          accent: 'rgb(var(--gh-accent) / <alpha-value>)',
          success: 'rgb(var(--gh-success) / <alpha-value>)',
          danger: 'rgb(var(--gh-danger) / <alpha-value>)',
          text: 'rgb(var(--gh-text) / <alpha-value>)',
          muted: 'rgb(var(--gh-muted) / <alpha-value>)',
        },
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease-out forwards',
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        shimmer: 'shimmer 1.5s linear infinite',
        blink: 'blink 1s step-end infinite',
        pulse: 'pulse 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

