import { RSA_PSS_SALTLEN_DIGEST } from 'node:constants';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import pallete from '../styles/palette';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    color: ${pallete.black};
    font-family: Noto Sans, Noto Sans KR;
  }
  `;

export default GlobalStyle;
