const colors = {
  nearWhite: '#F2F2F8',
  lightGray: '#C0C0C6',
  gray: '#909096',
  steel: '#606066',
  darkGray: '#404046',
  nearBlack: '#29292D',
  green: '#58A291',
  darkGreen: '#1B806D',
  red: '#CD545B',
  darkRed: '#633231',
  gold: '#E6A65D',
  melon: '#CAD97A',
};

export default {
  colors,
  fancyButtons: {
    green: {
      color: 'white',
      backgroundColor: colors.green,
      boxShadow: `0 0.3em ${colors.darkGreen}`,
      '&:active': {
        boxShadow: `0 0 ${colors.darkGreen}`,
        transform: 'translateY(0.3em)',
      },
    },
    red: {
      color: 'white',
      backgroundColor: colors.red,
      boxShadow: `0 0.3em ${colors.darkRed}`,
      '&:active': {
        boxShadow: `0 0 ${colors.darkRed}`,
        transform: 'translateY(0.3em)',
      },
    },
  },
};
