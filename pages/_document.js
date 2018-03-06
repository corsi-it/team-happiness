import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head} = renderPage()
    const styles = flush()
    return { html, head, styles }
  }

  render () {
    return (
     <html>
       <Head>
         <style>{`
           html {
             height: 100%;
             background: #FCD837;
           }
           body {
             margin: 0;
             color: #000;
             background: #FFF;
             text-align: center;
             min-height: 100%;
             font-family: 'Montserrat', sans-serif;
           }
           a {
             color: #000;
           }
           a:hover {
             color: #fff;
           }
           a:visited {
             color: #000;
           }
           `}</style>
       </Head>
       <body>
         <Main />
         <NextScript />
       </body>
     </html>
    )
  }
}