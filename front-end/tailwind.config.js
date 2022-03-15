module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './src/components/*.{html,js,jsx}',
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
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}