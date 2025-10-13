/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ocean: "#0077b6",
        sand: "#ffe5b4",
        earth: "#5a4633",
        sky: "#caf0f8",
        "text-dark": "#1a1a1a",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
};
