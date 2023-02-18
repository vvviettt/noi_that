/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#999999",
        third: "#f0f0f0",
        gray: "#b2b2b2",
        "gray-dark": "#262626",
        danger: "#dc3545",
        border: "#d8d8d8",
      },
    },
  },
  plugins: [],
};
