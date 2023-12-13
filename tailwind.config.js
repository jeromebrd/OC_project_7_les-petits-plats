/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './assets/scripts/*.js'],
  theme: {
    extend: {
      fontFamily: {
        anton: 'Anton',
      },
      colors: {
        dark: '#1b1b1b',
        darkgrey: '#7A7A7A',
        bggrey: '#EDEDED',
        lightgrey: '#C6C6C6',
        primary: '#FFD15B',
      },
    },
  },
  plugins: [],
};
