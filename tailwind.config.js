/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Premium Dark Palette */
        'obsidian': {
          900: '#12161A',
          800: '#1A2026',
          700: '#1E2330',
        },
        'neural-crimson': '#D3414E',
        'neural-crimson-light': '#E78A8F',
        'neutral-light': '#D8DDE4',
        'border-subtle': '#29323D',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'hero-xl': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-lg': ['48px', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'section-xl': ['36px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'section-lg': ['28px', { lineHeight: '1.3' }],
      },
      backdropBlur: {
        'xl': '12px',
      },
      animation: {
        'node-pulse': 'node-pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-in': 'slide-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        'node-pulse': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        'slide-in': {
          'from': { opacity: '0', transform: 'translateY(10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};