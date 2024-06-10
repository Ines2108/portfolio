module.exports = {
  content: ['storyblok/**/*.{vue,js}', 'storyblok/**/*.{vue,js}', 'pages/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        junge: ['Junge', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '3.815rem',
      '7xl': '4.768rem',
      '8xl': '5.96rem',
      '9xl': '7.45rem',
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
