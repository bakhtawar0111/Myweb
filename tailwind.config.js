/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '90vw':'90vw',
        '50vw':'50vw'
      }
    },
  },
  plugins: [],
}
