const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.5rem'],
      base: ['1rem', '1.75rem'],
      lg: ['1.125rem', '2rem'],
      xl: ['1.25rem', '2.25rem'],
      '2xl': ['1.5rem', '2.5rem'],
      '3xl': ['1.875rem', '2.75rem'],
      '4xl': ['2.25rem', '3rem'],
      '8xl': ['4.5rem', '5rem']
    },
    extend: {
      fontFamily: {
        spaceGrotesk: [ 'Space Grotesk', 'sans-serif']
      },
      colors : {
        'dark': '#0B0C10',
        'grayDark': '#1F2833',
        'grayLight': '#C5C6C7',
        'greenLight': '#66FCF1',
        'greenDark': '#45A29E',
        'purpleLight': '#f0e7f8',
        'yellowLight': '#ffdd68'
      },
      backgroundImage: {
        'hero': url('./src/assets/images/hero.svg')
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      screens: {
        'wide': '1440px'
      }
    },
  },
  plugins: [],
}