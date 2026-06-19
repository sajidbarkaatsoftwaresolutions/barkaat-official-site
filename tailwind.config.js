/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* Premium Palette mapped to CSS Variables */
        'obsidian': {
          900: 'var(--bg-obsidian-900)',
          800: 'var(--bg-obsidian-800)',
          700: 'var(--bg-obsidian-700)',
        },
        'neural-crimson': 'var(--accent-crimson)',
        'neural-crimson-light': 'var(--accent-crimson-light)',
        'accent-crimson': 'var(--accent-crimson)',
        'accent-crimson-light': 'var(--accent-crimson-light)',
        'accent-crimson-muted': 'var(--accent-crimson-muted)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        'text-soft': 'var(--text-soft)',
        'border-primary': 'var(--border-primary)',
        'border-subtle': 'var(--border-subtle)',
        'neutral-light': '#D8DDE4',
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