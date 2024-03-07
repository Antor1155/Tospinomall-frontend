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
        "semi-black-text": "#737373",
        "dim-text": "#9E9E9E",
        "semi-black": "#282828",
        "off-white": "#F6F6F6",
        "tospino-btn" : "#33c0ba50"
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["corporate", "dark"],
  },
};
