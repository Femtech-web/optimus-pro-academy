/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBtn:  '#0081FF',
        skyBlue: '#00FFFF',
        mainBg:  '#1E1E1E',
        coursesBg: '#1B1C1E',
        cardDarkBg: '#595A5B',
        cardDarkBg2: '#59728C',
        cardBg: 'rgba(92, 93, 94, 0.35)',
        brandBg: '#323334',
        hoverBg: '#49494B',
        inputBg: '#363739'
      },
      boxShadow: {
        btnShadow: '0 0 0 5px #3b83f65f',
      }
    },
  },
  plugins: [],
}

