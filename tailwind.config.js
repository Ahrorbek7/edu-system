/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./views/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppinsSerif: ['Poppins', 'sans-serif']
      },
      colors:{
        "login-input-bg": "#b3cde0",
      }
    },
  },
  plugins: [],
}