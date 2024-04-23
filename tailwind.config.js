/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#050505",
      secondary: "#0A0A0A",
      ternary: "#484848",
      accent: "#52EAFF",
      accentSecondary: "#FA6969",
      //
      buttonBackground: "#11262A",
      //
      white: "#ffffff",
      black: "#000000",
    },
  },
  plugins: [],
};
