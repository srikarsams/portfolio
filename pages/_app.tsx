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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        ></link>
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
