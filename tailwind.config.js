const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");


module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      lineHeight: {
        snugish: "1.25",
        normal: "2",
      },
      maxWidth: {
        letter: "72rem",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",

        black: "#24262d",
        white: "#fdfdfd",

        gray: {
          150: "#fdfdfd",
          250: "#24262d",
          550: "#8b9cbe",
          650: "#555e70",
          750: "#343a40",
          ...defaultTheme.colors.gray,
        },
        link: "#b2bfd9",
      },
    },
  },
  plugins: [],
}
