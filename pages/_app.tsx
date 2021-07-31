import type { AppProps } from "next/app";
import Head from "next/head";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="wrapper">
      <Head>
        <title>Srikar Samudrala</title>
      </Head>
      <Navigation />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
