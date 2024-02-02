import App from 'next/app'
import Head from 'next/head'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { CacheProvider } from '@emotion/react'

import createEmotionCache from '../../createEmotionCache'
import theme from '@/theme'

 
export default function MyApp({ Component, pageProps }) {
  const cache = createEmotionCache()

  return (
    <>
      <Head>
        <title> Helano Mariz </title>
        <link rel="shortcut icon" href="/images/logoHumanizar.png" type="image/png" />
        <meta name="facebook-domain-verification" content="1f6fbm5ibnhh1ifko2pjif2pqdsipe" />

        <script dangerouslySetInnerHTML={{__html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W5FK3GFP');
        `}} />

        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-345210624" />

        <script dangerouslySetInnerHTML={{__html:`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-345210624');
        `}} />

        <script dangerouslySetInnerHTML={{__html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1043040600238855');
            fbq('track', 'PageView');
        `}} />

        <noscript>
            <img 
                height="1" 
                width="1" 
                style={{display: 'none'}}
                src="https://www.facebook.com/tr?id=1043040600238855&ev=PageView&noscript=1"
            />
        </noscript>
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