/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '50px',
    },
    extend: {
      colors: {
        primary: '#06b6d4',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1220px',
      },
    },
  },
  plugins: [],
}
