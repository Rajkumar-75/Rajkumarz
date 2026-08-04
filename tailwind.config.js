/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        // Semantic design tokens
        brand: '#2563eb',
        'brand-deep': '#1d4ed8',
        'brand-electric': '#3b82f6',
        bg: '#030712',
        'card-bg': '#0b1120',
        'card-border': 'rgba(37,99,235,0.18)',
        'text-primary': '#ffffff',
        'text-secondary': '#94a3b8',
        'text-muted': '#475569',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%232563eb' stroke-opacity='0.06' stroke-width='1'/%3E%3C/svg%3E\")",
        'aurora': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(37,99,235,0.25) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 50%, rgba(29,78,216,0.15) 0%, transparent 50%)',
        'card-glow': 'radial-gradient(circle at 50% 0%, rgba(37,99,235,0.12) 0%, transparent 60%)',
      },
      boxShadow: {
        'blue-sm': '0 0 10px rgba(37,99,235,0.15), 0 0 0 1px rgba(37,99,235,0.1)',
        'blue-md': '0 0 20px rgba(37,99,235,0.2), 0 0 0 1px rgba(37,99,235,0.15)',
        'blue-lg': '0 0 40px rgba(37,99,235,0.25), 0 0 0 1px rgba(37,99,235,0.2)',
        'blue-xl': '0 0 60px rgba(37,99,235,0.3), 0 0 0 1px rgba(37,99,235,0.25)',
        'card': '0 4px 24px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.04) inset',
        'card-hover': '0 8px 40px rgba(0,0,0,0.5), 0 0 20px rgba(37,99,235,0.15), 0 1px 0 rgba(255,255,255,0.06) inset',
      },
      keyframes: {
        'float': {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%,100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'aurora': {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'particle': {
          '0%': { transform: 'translate(0, 0) scale(1)', opacity: '0.8' },
          '50%': { transform: 'translate(var(--px), var(--py)) scale(1.2)', opacity: '0.5' },
          '100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.8' },
        },
        'count-up': {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'border-glow': {
          '0%,100%': { borderColor: 'rgba(37,99,235,0.3)' },
          '50%': { borderColor: 'rgba(37,99,235,0.7)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'aurora': 'aurora 8s ease infinite',
        'border-glow': 'border-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [],
};
