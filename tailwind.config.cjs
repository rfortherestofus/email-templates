/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("tailwindcss-preset-email")],
  content: ["./components/**/*.html", "./emails/**/*.html", "./layouts/**/*.html"],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#f2f8fd",
          100: "#e3eefb",
          200: "#c1ddf6",
          300: "#8bc1ee",
          400: "#449ce1",
          500: "#2685d1",
          600: "#1869b1",
          700: "#15548f",
          800: "#154877",
          900: "#173d63",
          950: "#0f2742",
        },
      },
    },
  },
};
