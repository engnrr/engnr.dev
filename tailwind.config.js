const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");


module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
