import { AppProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { wrapper } from '../store';
const app = ({ Component, pageProps }: AppProps) => {
  console.log(GlobalStyle);
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default wrapper.withRedux(app);
