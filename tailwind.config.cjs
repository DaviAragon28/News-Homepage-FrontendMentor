/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        softOrange: '#e9ab53',
        softRed: '#f15e50',
        offWhite: '#fffdfa',
        grayishBlue: '#c5c6ce',
        darkGrayishBlue: '#5d5f79',
        veryDarkBlue: '#00001a'
      },
      fontFamily: {
        sans: ['inter', defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
