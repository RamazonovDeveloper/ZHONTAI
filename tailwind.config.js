/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        color_blue:"#244f98",
        color_red:"#ee2d34",
        color_orange:"#efc034",
        color_white:"#ffffff"
      }
    },
    screens: {
      md:"680px",
      lg:"1200px"
    }
  },
  plugins: [],
}

