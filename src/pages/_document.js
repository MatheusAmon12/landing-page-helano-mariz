import Document, { Html, Head, Main, NextScript } from 'next/document'
 
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage
 
    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })
 
    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)
 
    return initialProps
  }
 
  render() {
    return (
      <Html lang="pt-br">
        <Head>
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
        </Head>
        <body>
          <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W5FK3GFP"
            height="0" width="0" style={{display:"none", visibility:"hidden"}}></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
 
export default MyDocument