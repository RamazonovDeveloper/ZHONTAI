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
      xs: "320px",
      sm: "414px",
      md: "680px",
      lg: "1200px",
      xl: "1440px"
    },
    container: {
      center: true,
      padding: {
        // DEFAULT: "0.625rem",
        xs: "0.625rem",
        sm: "1rem",
        md: "1.25rem",
        lg: "1.875rem",
        xl: "1.875rem",
      },
      screens: {
        xs: "320px",
        sm: "414px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
        // xxl:"2000px",
        // xl: "1200px",
      },
    },
  },
  plugins: [],
}

