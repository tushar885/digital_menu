const { mauve, violet } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...mauve,
        ...violet,
      },

      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
        Poppins: ["Poppins ", "sans-serif"],
        Lato: ["Lato", "sans-serif"],
        "default-bold-body": "SF Pro Text",
        "description-of-gotra": "Outfit",
        "josefin-sans": "'Josefin Sans'",
      },

      keyframes: {
        slideDown: {
          from: { height: "0px" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0px" },
        },
      },
      animation: {
        slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },
  plugins: [],
};
