/** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/html/utils/withMT");
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  themes: ["light", "dark", "cupcake"],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      colors: {
        Cpurple: "#7269EF",
      },
    },
  },
};
