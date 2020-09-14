import "../css/style.css";
import Header from "../components/header";
import Footer from "../components/footer";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}

export default MyApp;
