/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f9004d",
        paragraph: "#fcfc",
        bg1: "#101010",
        bg2: "#191919"
      },
      boxShadow: {
        btn: "0px 0px 5px #000, 0px 0px 15px #858585"
      },
      screens: {
        xxs: "375px",
        xs: "480px",
        ss: "620px",
        sm: "768px",
        lap: "1024px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      }
    },
  },
  plugins: [],
}