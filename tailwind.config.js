module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        100: '30rem',
        101: '40rem',
      },
      colors: {
        green: {
          g01: '#d9b960',
          g02: '#878533',
          g03: '#557537',
          g04: '#7e5f17',
          g05: '#412e13',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
