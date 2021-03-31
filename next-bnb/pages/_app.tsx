import { AppProps } from 'next/app';
import Header from '../components/Header';
import GlobalStyle from '../styles/GlobalStyle';
const app = ({ Component, pageProps }: AppProps) => {
  console.log(GlobalStyle);
  return (
    <>
      <Header />
      <GlobalStyle />
      <Component {...pageProps} />
      <div id='root-modal' />
    </>
  );
};

export default app;
