import { AppProps } from 'next/app';
import { SessionProvider } from "next-auth/react"
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

const App = ({ Component, pageProps: { session, ...pageProps }}) => {
  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      
      <SessionProvider session={session}>
          <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'light' }}>
            <Component {...pageProps} />
          </MantineProvider>
        </SessionProvider>
    </>
  )
}

export default App
