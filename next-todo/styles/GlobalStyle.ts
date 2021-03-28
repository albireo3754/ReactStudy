import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    margin: 0;
    font-family: 'Black Han Sans', sans-serif;
  }
  `;

export default GlobalStyle;
