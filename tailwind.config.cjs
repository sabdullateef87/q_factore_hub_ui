/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-bg-img": "url('/src/assets/bg1.png')",
      },
      keyframes: {
        wiggle: {
          from: { right: "-100%" },
          to: { right: "0" },
        },
      },
      animation: {
        wiggle: "wiggle 2s ease",
      },
    },
    screens: {
      mobile_lg: { min: "425px", max: "550px" },
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
  },
  plugins: [],
};
