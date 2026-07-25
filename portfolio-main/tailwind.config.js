/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        void: '#000000',
        deep: '#050505',
        abyss: '#0A0A0A',
        surface: '#0F0F0F',
        'surface-2': '#141414',
        'blue-glow': '#3B82F6',
        'blue-soft': '#60A5FA',
        'blue-dim': '#1D4ED8',
        'crimson-glow': '#BE123C',
        'crimson-soft': '#E11D48',
        'purple-glow': '#7C3AED',
        'purple-soft': '#8B5CF6',
        'white-glow': 'rgba(255,255,255,0.9)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M0 0h40v1H0zM0 0v40h1V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5', boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' },
          '50%': { opacity: '1', boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)' },
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
      boxShadow: {
        'glow-blue': '0 0 30px rgba(59, 130, 246, 0.25)',
        'glow-blue-lg': '0 0 60px rgba(59, 130, 246, 0.35)',
        'glow-purple': '0 0 30px rgba(124, 58, 237, 0.25)',
        'glow-crimson': '0 0 30px rgba(190, 18, 60, 0.25)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
        'card': '0 20px 60px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
}
