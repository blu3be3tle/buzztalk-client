/** @type {import('tailwindcss').Config} */
export default {
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
