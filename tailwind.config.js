/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B71C1C",
        gold: "#D4AF37",
        cream: "#FFF8E7",
        dark: "#1F2937"
      }
    },
  },
  plugins: [],
}
