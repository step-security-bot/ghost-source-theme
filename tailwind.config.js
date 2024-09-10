/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.hbs", "./**/*.hbs"],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

