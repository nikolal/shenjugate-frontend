/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#04011c",
      secondary: "#0b0f24",
      ternary: "#c8e2e5",
      accent: "#9e030d",

      //
      white: "#ffffff",
      black: "#000000",
    },
  },
  plugins: [],
};
