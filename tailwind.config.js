/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      "tospino-bg": "#3ac2bc",
      "tospino-text": "#33c0ba",
      "sm-black-text": "#737373",
    },
    plugins: [],
  }
};
