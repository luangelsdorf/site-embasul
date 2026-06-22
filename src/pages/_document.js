import { Html, Head, Main, NextScript } from 'next/document'

export default function Document({ locale }) {
  return (
    <Html lang={locale || 'pt-BR'}>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/images/svg/Favicon.svg" />
        <link rel="shortcut icon" href="/images/svg/Favicon.svg" />
        <meta name="theme-color" content="#006CCC" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&family=Onest:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

Document.getInitialProps = async (ctx) => {
  const initialProps = await ctx.defaultGetInitialProps(ctx);
  return { ...initialProps, locale: ctx.locale };
};
