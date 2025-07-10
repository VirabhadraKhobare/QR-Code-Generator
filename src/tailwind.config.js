/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // this line is CRITICAL for Netlify + React
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
