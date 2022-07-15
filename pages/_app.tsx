import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.querySelector('html')?.setAttribute('data-theme', 'dracula');
  }, []);
  return (
    <>
      <Head>
        <title>Highlight The Words</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
