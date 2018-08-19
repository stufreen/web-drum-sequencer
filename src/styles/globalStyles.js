import { injectGlobal } from 'styled-components';
import theme from './theme';

export default () => injectGlobal`
  html {
    background-color: ${theme.colors.nearBlack};
  }

  * {
    font-family: "Futura", sans-serif;
  }

  body { 
    min-width: 750px;
    box-sizing: border-box;
  }

  .bpm-text-input {
    -moz-appearance:textfield;
  }

  /* Webkit browsers like Safari and Chrome */
  .bpm-text-input::-webkit-inner-spin-button,
  .bpm-text-input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
