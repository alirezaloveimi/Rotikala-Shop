/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        '100': '416px'
      },
      transitionTimingFunction: {
        'custom-ease': 'ease'
      },
      colors: {
        primary: '#10b981',
        mainDark: '#0d0d0d'
      },
      container: {
        center: true,
        padding: '1rem'
      },
      screens: {
        '2xl': '1280px'
      }
    },
  },
  plugins: [],
}

