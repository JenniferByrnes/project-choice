/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pcWhite: {100: '#fffefe'},
        pcTan: {100: '#fcded3'},
        pcGreen: {100: '#dae8e3'},
        pcPink: {100: '#d98a8a'},
        pcCoral: {100: '#dc585d'}
      },
    },
  },
  plugins: [],
}
