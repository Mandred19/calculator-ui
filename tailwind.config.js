/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    colors: {
      light: 'rgb(226 232 240)',
      dark: 'rgb(30 41 59)',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
