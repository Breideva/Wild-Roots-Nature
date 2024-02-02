/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'custom': ['"EB Garamond"', 'sans-serif'],
      'custom-1': ['"Antonio"', 'sans-serif'],
    },
    clipPath: {
      'polygon': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%);',
    },
  },
  plugins: [],
}

