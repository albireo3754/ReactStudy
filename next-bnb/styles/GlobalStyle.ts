import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Black Han Sans', sans-serif;
  }
  `;

export default GlobalStyle;
