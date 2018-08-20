import { injectGlobal } from 'styled-components';
import theme from './theme';
import futuraMediumWoff2 from '../assets/fonts/FuturaStd-Medium.woff2';
import futuraMediumWoff from '../assets/fonts/FuturaStd-Medium.woff';
import futuraBoldWoff2 from '../assets/fonts/FuturaStd-Bold.woff2';
import futuraBoldWoff from '../assets/fonts/FuturaStd-Bold.woff';
import futuraHeavyWoff2 from '../assets/fonts/FuturaStd-Heavy.woff2';
import futuraHeavyWoff from '../assets/fonts/FuturaStd-Heavy.woff';

export default () => injectGlobal`
  @font-face {
    font-family: 'Futura';
    src: url(${futuraMediumWoff2}) format('woff2'),
      url(${futuraMediumWoff}) format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Futura';
    src: url(${futuraBoldWoff2}) format('woff2'),
      url(${futuraBoldWoff}) format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Futura';
    src: url(${futuraHeavyWoff2}) format('woff2'),
      url(${futuraHeavyWoff}) format('woff');
    font-weight: 600;
    font-style: normal;
  }

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
