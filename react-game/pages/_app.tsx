import { AppProps } from 'next/app';
import { wrapper } from '../store';
import GlobalStyle from '../styles/GlobalStyle';
const app = ({ Component, pageProps }: AppProps) => {
  console.log(GlobalStyle);
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(app);
