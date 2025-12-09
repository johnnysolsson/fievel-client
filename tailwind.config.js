/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './.storybook/**/*.{js,ts,jsx,tsx}',
    './storybook-static/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#fcf7f6',
          100: '#f7f3f0', // subtle hover bg
          200: '#eadedd',
          300: '#d3c0bf',
          400: '#b69392',
          500: '#965f5b',
          600: '#7f3f3b',
          700: '#722a28',
          800: '#6B1E1E', // primary action
          900: '#5A1818', // darker hover
        },
      },
      borderRadius: {
        pill: '9999px',
      },
    },
  },
  plugins: [],
};
