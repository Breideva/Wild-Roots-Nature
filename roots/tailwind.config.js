/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["EB Garamond", "sans-serif"],
        custom1: ["Antonio", "sans-serif"],
      },
      clipPath: {
        polygon: "polygon(0 0, 100% 0, 100% 100%, 0% 100%);",
      },
      colors: {
        bg: "#D7E5C8",
        bgBox: "#CDDFB9",
        bgBox2: "#C3D8AB",
        bgBlue: "#202646",
      },
    },
  },
  plugins: [],
};
