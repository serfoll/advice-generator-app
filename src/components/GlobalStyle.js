import { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';
import Colors from './Colors';

//FONTS
const manropeEot = new URL(
  '../fonts/manrope-v12-latin-800.eot',
  import.meta.url
);
const manropeEotIEFix = new URL(
  '../fonts/manrope-v12-latin-800.eot?#iefix',
  import.meta.url
);
const manropeWoff2 = new URL(
  '../fonts/manrope-v12-latin-800.woff2',
  import.meta.url
);
const manropeWoff = new URL(
  '../fonts/manrope-v12-latin-800.woff',
  import.meta.url
);
const manropeTtf = new URL(
  '../fonts/manrope-v12-latin-800.ttf',
  import.meta.url
);
const manropeSvg = new URL(
  '../fonts/manrope-v12-latin-800.svg#Manrope',
  import.meta.url
);

export default createGlobalStyle`
  ${normalize}

  /* manrope-800 - latin */
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 800;
  src: url(${manropeEot}); /* IE9 Compat Modes */
  src: local(''),
       url(${manropeEotIEFix}) format('embedded-opentype'), /* IE6-IE8 */
       url(${manropeWoff2}) format('woff2'), /* Super Modern Browsers */
       url(${manropeWoff}) format('woff'), /* Modern Browsers */
       url(${manropeTtf}) format('truetype'), /* Safari, Android, iOS */
       url(${manropeSvg}) format('svg'); /* Legacy iOS */
}

  *,
  *:before,
  *:after{
    box-sizing: borde-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
  }

  body{
    font-family: 'Manrope',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    background-color: ${Colors['dark-blue']};
  }
`;
