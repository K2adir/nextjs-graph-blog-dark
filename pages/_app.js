import Layout from "../components/Layout";
import ThemeProvider from "../context/theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
