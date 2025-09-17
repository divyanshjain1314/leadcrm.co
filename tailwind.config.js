/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Exo 2"', "sans-serif"],
        handwriting: ['"Caveat"', "cursive"],
      },
      boxShadow: {
        "custom-green-shadow": "0px 8px 24px 0px #959DA533",
      },
    },
  },
  plugins: [],
};
