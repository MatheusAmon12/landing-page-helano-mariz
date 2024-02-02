import App from 'next/app'
import Head from 'next/head'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { CacheProvider } from '@emotion/react'

import createEmotionCache from '../../createEmotionCache'
import theme from '@/theme'
import Analytics from '@/components/Analytics/gtag'
import PixelFacebook from '@/components/Pixel/facebook/pixel-1'
 
export default function MyApp({ Component, pageProps }) {
  const cache = createEmotionCache()

  return (
    <>
      <Head>
        <title> Helano Mariz </title>
        <link rel="shortcut icon" href="/images/logoHumanizar.png" type="image/png" />
        <meta name="facebook-domain-verification" content="1f6fbm5ibnhh1ifko2pjif2pqdsipe" />
        <Analytics />
        <PixelFacebook />
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