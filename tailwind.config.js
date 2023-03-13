/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Dancing Script']
      }
    },
    // colors: {
    //   primary: {
    //     100: '#DFAE93',
    //     200: '#be602c',
    //     300: '#3b2e27'
    //   },
    //   secondary: {
    //     100: '#D9D9D9',
    //     200: ''},
    // }
  },
  plugins: [],
  darkMode: 'class'
}


