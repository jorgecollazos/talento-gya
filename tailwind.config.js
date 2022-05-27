module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'tBlue': '#0857C3',
        'tSkyeblue': '#00BCE3',
        'tAquamarine': '#6DD5C3',
        'tGray': '#E9EFF2',
        'tBlack': '#25282A'
      }),
      textColor: {
        'tBlue': '#0857C3',
        'tSkyeblue': '#00BCE3',
        'tAquamarine': '#6DD5C3',
        'tGray': '#E9EFF2',
        'tBlack': '#25282A'
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'tBlue': '#0857C3',
          'tSkyeblue': '#00BCE3',
          'tAquamarine': '#6DD5C3',
          'tGray': '#E9EFF2',
          'tBlack': '#25282A'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}