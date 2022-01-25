import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  //Aqui ponemos el contenido del header
  render() {
    return (
      <Html>
        <Head>
          <title>portfolio</title>
          <meta
            name="description"
            content="javier-perez software developer"
          ></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
