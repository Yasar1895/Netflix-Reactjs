/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        netflixRed: '#E50914',
        netflixDark: '#0b0b0b',
        cardGradientA: '#1F2937',
        cardGradientB: '#111827'
      }
    },
  },
  plugins: [],
}
