/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
   content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "640px",
          paddingLeft: "1.25rem",
          paddingRight: "1.25rem",
          "@screen md": {
            maxWidth: "768px",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          },
          "@screen lg": {
            maxWidth: "1024px",
            paddingLeft: "2.25rem",
            paddingRight: "2.25rem",
          },
          "@screen xl": {
            maxWidth: "1440px",
            paddingLeft: "10rem",
            paddingRight: "10rem",
          },
        },
      });
    }),
  ],
}

