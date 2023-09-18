/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        128: '42rem', // You can adjust the width as needed
      },
    },
  },
  plugins: [],
};
