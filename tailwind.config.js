/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css,jsx}"],
  theme: {
    extend: {
      color:{
        logoColor : "rgb(239, 39, 40)",
        color456 : "rgb(46, 56, 66)",
      },

      backgroundImage : {

      },

      boxShadow : {
        cartBtn : '0 3px 6px 0 rgb(0, 0, 0, 0.16)',
      },
      fontFamily :{
        montserrat : "Montserrat, sans-serif"
      },
    },
  },
  plugins: [],
}
