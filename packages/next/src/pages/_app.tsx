import '../styles/global.scss';
import 'raf/polyfill';
// @ts-ignore
global.setImmediate = requestAnimationFrame;
import 'setimmediate';

import { theme } from 'app/theme';
import { DripsyProvider } from 'dripsy';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Example</title>
        <meta key="title" name="title" content="Example" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
          name="viewport"
        />
      </Head>
      <DripsyProvider theme={theme}>
        <SafeAreaProvider>
          <Component {...pageProps} />
        </SafeAreaProvider>
      </DripsyProvider>
    </>
  );
}
