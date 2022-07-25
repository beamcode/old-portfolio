/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'earth': "url('/src/assets/background.png')",
      }
    },
  },
  plugins: [],
}
