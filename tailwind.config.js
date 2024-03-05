/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "tospino": "#3ac2bc",
        "tospino-text": "#33c0ba",
        "semi-black": "#737373",
      },
    },
  },
  plugins: [],
};
