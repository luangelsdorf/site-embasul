import Head from "next/head";
import Image from "next/image";
import Page from 'public/images/gambi/design/page.svg';

export default function Design() {
  return (
    <div>
      <Head>
        <title>Design com AI | Embasul</title>
      </Head>

      <Page id="page" style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} />
    </div>
  )
}
