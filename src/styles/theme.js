const colors = {
  nearWhite: '#F2F2F8',
  lightGray: '#C0C3C7',
  gray: '#909599',
  steel: '#606469',
  darkGray: '#404449',
  nearBlack: '#202427',
  black80: 'rgba(0,0,0,0.8)',
  green: '#58A291',
  lightGreen: '#68B2A1',
  darkGreen: '#1B806D',
  red: '#CD545B',
  lightRed: '#DD646B',
  darkRed: '#633231',
  brightRed: '#E1523D',
  gold: '#E6A65D',
  primary: 'rgba(213,255,169,1)',
  primaryDark: 'rgba(180,215,129,1)',
  secondary: 'rgba(152,255,193,1)',
  blue: '#2f85c6',
  darkBlue: '#196096',
};

export default {
  fontSizes: [
    12, 14, 16, 24, 32, 48, 64, 96, 128,
  ],
  space: [
    // margin and padding
    0, 4, 8, 16, 32, 64, 128, 256,
  ],
  breakpoints: ['640px', '720px', '769px', '820px', '900px', '1024px', '1200px', '1400px'],
  colors,
  fancyButtons: {
    green: {
      color: 'white',
      backgroundColor: colors.green,
      boxShadow: `0 0.3em ${colors.darkGreen}`,
      '&:hover': {
        backgroundColor: colors.lightGreen,
      },
      '&:active': {
        backgroundColor: colors.lightGreen,
        boxShadow: `0 0 ${colors.darkGreen}`,
        transform: 'translateY(0.3em)',
      },
    },
    red: {
      color: 'white',
      backgroundColor: colors.red,
      boxShadow: `0 0.3em ${colors.darkRed}`,
      '&:hover': {
        backgroundColor: colors.lightRed,
      },
      '&:active': {
        backgroundColor: colors.lightRed,
        boxShadow: `0 0 ${colors.darkRed}`,
        transform: 'translateY(0.3em)',
      },
    },
  },
};
