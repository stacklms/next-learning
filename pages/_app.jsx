import { AppProps } from 'next/app';
import { SessionProvider } from "next-auth/react"
import Head from 'next/head';
import { Loader, MantineProvider } from '@mantine/core';
import { RecoilRoot } from 'recoil'
import { SWRConfig } from 'swr'
import '../styles/globals.css'

const App = ({ Component, pageProps: { session, ...pageProps }}) => {
  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <SessionProvider session={session}>
          <MantineProvider withGlobalStyles withNormalizeCSS theme={{ 
            colorScheme: 'light',
            
          }}>
            <RecoilRoot>
                <SWRConfig value={{ refreshInterval: 3000, fetcher: (resource, init) => fetch(resource, init).then(res => res.json()) }}>
                  <Component {...pageProps} />
                </SWRConfig>
            </RecoilRoot>
          </MantineProvider>
        </SessionProvider>
    </>
  )
}

export default App
