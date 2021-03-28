import { AppProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import Header from '../components/Header';

const app = ({ Component, pageProps }: AppProps) => {
  console.log(GlobalStyle);
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default app;
