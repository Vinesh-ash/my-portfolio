/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#05070f',
          surface: '#090d18',
          card: '#0d1322',
          cardHover: '#11192d',
          border: 'rgba(30, 41, 59, 0.7)',
          borderGlow: 'rgba(0, 240, 255, 0.25)',
        },
        cyan: {
          electric: '#00f0ff',
          neon: '#06b6d4',
          glow: 'rgba(0, 240, 255, 0.15)',
        },
        electric: {
          blue: '#2563eb',
          cyan: '#00f0ff',
          sky: '#38bdf8',
          violet: '#6366f1',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at 50% 0%, rgba(0, 240, 255, 0.08) 0%, transparent 60%)',
        'grid-pattern': 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
        'dots-pattern': 'radial-gradient(rgba(0, 240, 255, 0.15) 1px, transparent 1px)',
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'glow-sweep': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        'node-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      animation: {
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'glow-sweep': 'glow-sweep 6s linear infinite',
        'node-float': 'node-float 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
