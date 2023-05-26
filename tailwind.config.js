/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './theme.config.tsx'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd",
          "400": "#60a5fa", "500": "#3b82f6",
          "600": "#2684ff",
          "700": "#176fe2",
          "800": "#1,e40af", "900": "#1e3a8a"
        },
        pink: {
          "100": "#f4dbda"
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
