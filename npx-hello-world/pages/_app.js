import "../styles/globals.css";
import Header2 from "./Header2";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header2 />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
