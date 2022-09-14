/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    backgroundImage: {
      "test-bg": "url('../src/img/main.jpg')",
    },
  },
  plugins: [],
};
