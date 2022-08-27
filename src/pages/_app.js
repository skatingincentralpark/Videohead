import Header from "../components/header";
import GlobalStyles from "../styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
