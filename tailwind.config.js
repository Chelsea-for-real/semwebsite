/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['IBM Plex Mono', 'monospace'],
        sans: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        'xmum-blue': '#003366',
        'xmum-gold': '#C9A639',
        'neo-pink': '#FF005C',
        'neo-cyan': '#00F0FF',
        'neo-yellow': '#FFD600',
        'neo-green': '#00FF85',
      },
      boxShadow: {
        'brutal': '6px 6px 0 #000000',
        'brutal-lg': '10px 10px 0 #000000',
        'brutal-sm': '4px 4px 0 #000000',
      },
    },
  },
  plugins: [],
}
