/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brown': {
          800: '#4A3428',
          900: '#2C1810',
        }
      },
      zIndex: {
        '50': '50',
      }
    },
  },
  plugins: [],
} 