/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: { green: '#12a15f', blue: '#1473c9' },
        ink: '#0b1f2a',
        mute: '#4d6470',
        mist: '#f8fbfc',
        line: '#e6edf0',
      },
      keyframes: {
        marquee: { to: { transform: 'translateX(-50%)' } },
        drift: { to: { transform: 'translate(70px,50px) scale(1.12)' } },
        sweep: { to: { transform: 'rotate(360deg)' } },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        drift: 'drift 18s ease-in-out infinite alternate',
        sweep: 'sweep 6s linear infinite',
      },
    },
  },
  plugins: [],
};
