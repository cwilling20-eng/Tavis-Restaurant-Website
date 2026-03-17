/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF8F4',
          100: '#F5F0E8',
          200: '#EDE5D8',
          300: '#E2D6C4',
          400: '#D9CFC1',
          500: '#C8BAA7',
        },
        terracotta: {
          300: '#B8614F',
          400: '#A0522D',
          500: '#8B3A2F',
          600: '#7A3028',
          700: '#612520',
        },
        olive: {
          300: '#7A8B56',
          400: '#6B7D47',
          500: '#5C6B3C',
          600: '#4D5A32',
        },
        espresso: {
          300: '#5C4A4A',
          400: '#4A3838',
          500: '#3B2F2F',
          600: '#2E2323',
          700: '#1F1717',
        },
        gold: {
          400: '#D4B86A',
          500: '#C5A55A',
          600: '#B39449',
        },
        italian: {
          green: '#009246',
          red: '#CE2B37',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
