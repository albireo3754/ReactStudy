import { RSA_PSS_SALTLEN_DIGEST } from 'node:constants';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import palette from '../styles/palette';
import pallete from '../styles/palette';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
    color: ${palette.black};
  }
  body {
    color: ${pallete.black};
    font-family: Noto Sans, Noto Sans KR;
  }
  `;

export default GlobalStyle;
