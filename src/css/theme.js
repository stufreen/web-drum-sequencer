// theme.js
export default {
  colors: {
    nearWhite: '#F2F2F8',
    lightGray: '#C0C0C6',
    darkGray: '#404046',
    nearBlack: '#29292D',
    green: '#58A291',
    darkGreen: '#1B806D',
    red: '#9E2A2B',
    darkRed: '#633231',
    gold: '#E6A65D',
  },
  fancyButtons: {
    green: {
      color: 'white',
      backgroundColor: '#58A291',
      boxShadow: '0 0.3em #1B806D',
      '&:active': {
        boxShadow: '0 0 #1B806D',
        transform: 'translateY(0.3em)',
      },
    },
    red: {
      color: 'white',
      backgroundColor: '#9E2A2B',
      boxShadow: '0 0.3em #633231',
      '&:active': {
        boxShadow: '0 0 #633231',
        transform: 'translateY(0.3em)',
      },
    },
  },
};
