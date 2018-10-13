import { injectGlobal } from 'styled-components';
import theme from './theme';
import jakobRegularWoff2 from '../assets/fonts/jakob-reg-webfont.woff2';
import jakobRegularWoff from '../assets/fonts/jakob-reg-webfont.woff';
import jakobBoldWoff2 from '../assets/fonts/jakob-b-webfont.woff2';
import jakobBoldWoff from '../assets/fonts/jakob-b-webfont.woff';
import jakobSemiboldWoff2 from '../assets/fonts/jakob-sb-webfont.woff2';
import jakobSemiboldWoff from '../assets/fonts/jakob-sb-webfont.woff';

export default () => injectGlobal`
  @font-face {
    font-family: 'dtj';
    src: url(${jakobRegularWoff2}) format('woff2'),
         url(${jakobRegularWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'dtj';
    src: url(${jakobSemiboldWoff2}) format('woff2'),
         url(${jakobSemiboldWoff}) format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'dtj';
    src: url(${jakobBoldWoff2}) format('woff2'),
         url(${jakobBoldWoff}) format('woff');
    font-weight: bold;
    font-style: normal;
  }

  html {
    background-color: ${theme.colors.nearBlack};
  }

  * {
    font-family: "dtj", "Futura", sans-serif;
    font-display: swap;
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
