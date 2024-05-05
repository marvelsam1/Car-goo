/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'blue': '#1572D3',
      'black': '#242424',
      'gray': '##808080',
      'lightGray': '#cdcdcd',
      'lightBlue': '#daecffdd',
      'deepBlue': '#051C34'
    },
    extend: {},
  },
  plugins: [],
}

