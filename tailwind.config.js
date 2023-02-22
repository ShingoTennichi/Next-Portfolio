/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // skills
        '42': 'repeat(42, minmax(75px, 75px))'
      },
      animation: {
        slider: 'slider 20s linear infinite'
      },
      keyframes: {
        slider: {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(-2415px)' }
        }
      }
    }
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        // 'p': { fontSize: "18px" },
      })
    }),
  ],
}