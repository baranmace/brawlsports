/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brawl-dark': '#0a0a0a',
        'brawl-gray': '#1a1a1a',
        'brawl-blue': '#00d4ff',
        'brawl-purple': '#8b5cf6',
        'brawl-yellow': '#fbbf24',
        'brawl-green': '#10b981',
        'brawl-red': '#ef4444',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}