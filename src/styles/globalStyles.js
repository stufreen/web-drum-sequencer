import { injectGlobal } from 'styled-components';
import theme from './theme';
import jostMediumWoff2 from '../assets/fonts/jost-medium-webfont.woff2';
import jostMediumWoff from '../assets/fonts/jost-medium-webfont.woff';
import jostBoldWoff2 from '../assets/fonts/jost-bold-webfont.woff2';
import jostBoldWoff from '../assets/fonts/jost-bold-webfont.woff';
import jostSemiboldWoff2 from '../assets/fonts/jost-semi-webfont.woff2';
import jostSemiboldWoff from '../assets/fonts/jost-semi-webfont.woff';

export default () => injectGlobal`

  @font-face {
    font-family: 'Jost';
    font-style: normal;
    font-weight: 400;
    src: local('Jost Medium'), local('Jost-Medium'),
        url(${jostMediumWoff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${jostMediumWoff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  @font-face {
    font-family: 'Jost';
    font-style: normal;
    font-weight: 600;
    src: local('Jost SemiBold'), local('Jost-SemiBold'),
        url(${jostSemiboldWoff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${jostSemiboldWoff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  @font-face {
    font-family: 'Josts';
    font-style: normal;
    font-weight: 700;
    src: local('Jost Bold'), local('Jost-Bold'),
        url(${jostBoldWoff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${jostBoldWoff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  html {
    background-color: ${theme.colors.nearBlack};
  }

  * {
    font-family: "Jost", "Futura", sans-serif;
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
