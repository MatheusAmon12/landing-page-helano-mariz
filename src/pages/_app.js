import App from 'next/app'
import Head from 'next/head'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { CacheProvider } from '@emotion/react'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'

import createEmotionCache from '../../createEmotionCache'
import theme from '@/theme'

const GTM_ID = 'GTM-W5FK3GFP'
 
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: GTM_ID })
  }, [])

  const cache = createEmotionCache()

  return (
    <>
      <Head>
        <title> Helano Mariz </title>
        <link rel="shortcut icon" href="/images/favicon.svg" type="image/png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <CssBaseline />
      <CacheProvider value={cache}>
          <ThemeProvider theme={theme}>
              <Component {...pageProps} />
          </ThemeProvider>
      </CacheProvider>
    </>
  )
}
 
MyApp.getInitialProps = async (context) => {
  const ctx = await App.getInitialProps(context)
 
  return { ...ctx}
}