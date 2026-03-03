/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0CC8A8",
        critical: "#EF4444",
        high: "#F97316",
        medium: "#F59E0B",
        low: "#22C55E",
        darkBg: "#0F0F0F",
        darkSurface: "#1A1A1A",
      },
      borderRadius: {
        xl: "12px",
      }
    },
  },
  plugins: [],
}