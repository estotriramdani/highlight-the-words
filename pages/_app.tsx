import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.querySelector('html')?.setAttribute('data-theme', 'dracula');
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
