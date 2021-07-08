import React from 'react'
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
          </>
        )
      }
    } finally {
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />

          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@100;200;300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}