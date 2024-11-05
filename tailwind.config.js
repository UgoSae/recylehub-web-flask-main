module.exports = {
  content: ["./static/**/*.{html,js}", "./templates/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      backdropFilter: {
        none: "none",
        blur: "blur(20px)",
      },
      fontFamily: {
        poppins: ["poppins"],
      },
    },
  },
  variants: {
    backdropFilter: ["responsive"],
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-filters"),
  ],
};
