import { injectGlobal } from 'styled-components';
import theme from './theme';
// import josefinRegularWoff2 from '../assets/fonts/dtjakob-dflt-regular-webfont.woff2';
// import josefinRegularWoff from '../assets/fonts/dtjakob-dflt-regular-webfont.woff';
// import josefinBoldWoff2 from '../assets/fonts/dtjakobdflt-bold-webfont.woff2';
// import josefinBoldWoff from '../assets/fonts/dtjakobdflt-bold-webfont.woff';
// import josefinSemiboldWoff2 from '../assets/fonts/dtjakob-dflt-semibold-webfont.woff2';
// import josefinSemiboldWoff from '../assets/fonts/dtjakob-dflt-semibold-webfont.woff';
// import josefinRegularWoff2 from '../assets/fonts/wavehaus-book-webfont.woff2';
// import josefinRegularWoff from '../assets/fonts/wavehaus-book-webfont.woff';
// import josefinBoldWoff2 from '../assets/fonts/wavehaus-bold-webfont.woff2';
// import josefinBoldWoff from '../assets/fonts/wavehaus-bold-webfont.woff';
// import josefinSemiboldWoff2 from '../assets/fonts/wavehaus-semibold-webfont.woff2';
// import josefinSemiboldWoff from '../assets/fonts/wavehaus-semibold-webfont.woff';
import josefinRegularWoff2 from '../assets/fonts/jost-medium-webfont.woff2';
import josefinRegularWoff from '../assets/fonts/jost-medium-webfont.woff';
import josefinBoldWoff2 from '../assets/fonts/jost-bold-webfont.woff2';
import josefinBoldWoff from '../assets/fonts/jost-bold-webfont.woff';
import josefinSemiboldWoff2 from '../assets/fonts/jost-semi-webfont.woff2';
import josefinSemiboldWoff from '../assets/fonts/jost-semi-webfont.woff';

export default () => injectGlobal`
  /* josefin-sans-regular - latin */
  @font-face {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Josefin Sans Regular'), local('JosefinSans-Regular'),
        url(${josefinRegularWoff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${josefinRegularWoff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* josefin-sans-600 - latin */
  @font-face {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 600;
    src: local('Josefin Sans SemiBold'), local('JosefinSans-SemiBold'),
        url(${josefinSemiboldWoff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${josefinSemiboldWoff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* josefin-sans-700 - latin */
  @font-face {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 700;
    src: local('Josefin Sans Bold'), local('JosefinSans-Bold'),
        url(${josefinBoldWoff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${josefinBoldWoff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  html {
    background-color: ${theme.colors.nearBlack};
  }

  * {
    font-family: "Josefin Sans", "Futura", sans-serif;
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
