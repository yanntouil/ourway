const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    textFillColor: theme => theme('borderColor'),
    textStrokeColor: theme => theme('borderColor'),
    textStrokeWidth: theme => theme('borderWidth'),
    paintOrder: {
      'fsm': { paintOrder: 'fill stroke markers' },
      'fms': { paintOrder: 'fill markers stroke' },
      'sfm': { paintOrder: 'stroke fill markers' },
      'smf': { paintOrder: 'stroke markers fill' },
      'mfs': { paintOrder: 'markers fill stroke' },
      'msf': { paintOrder: 'markers stroke fill' },
    },
    extend: {
      fontSize: {
        '10xl': '10rem',
      },
      zIndex: {
        '-10': '-10',
        '-5': '-5',
        '1': '1',
        '2': '2',
      },
      rotate: {
        '10': '10deg',
        '-10': '-10deg',
        '15': '15deg',
        '-15': '-15deg',
      },
      transitionDuration: {
        '10000': '10s',
      },
      width: {
        '15vw': '15vw',
        '20vw': '20vw',
        '25vw': '25vw',
      },
      height: {
        '20vw': '20vw',
        '25vw': '25vw',
      },
      colors: {
        // Contextual color
        primary: colors.sky,
        secondary: colors.stone,
        danger: colors.red,
        success: colors.lime,
        warning: colors.orange,
        info: colors.teal,
      },
      gridTemplateRows: {
        '7': 'repeat(7, minmax(0, 1fr))',
        '8': 'repeat(8, minmax(0, 1fr))',
        '9': 'repeat(9, minmax(0, 1fr))',
        '10': 'repeat(10, minmax(0, 1fr))',
        '11': 'repeat(11, minmax(0, 1fr))',
        'auto-1fr': 'auto 1fr',
        'auto-1fr-1fr': 'auto 1fr 1fr',
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      },
    },
  },
  plugins: [
    require('tailwindcss-text-fill-stroke')(),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
