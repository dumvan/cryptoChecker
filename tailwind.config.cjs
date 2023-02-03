/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{.svg,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#e06d06',
        'secondary':'#ffc53a',
        'tertiary':'#faff81'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@shrutibalasa/tailwind-grid-auto-fit'),
  ],
}