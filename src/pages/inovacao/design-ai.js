import Head from "next/head";
import Image from "next/image";
import page from 'public/images/gambi/design/page.png';

export default function Design() {
  return (
    <div>
      <Head>
        <title>Design com AI | Embasul</title>
      </Head>

      <Image id="page" style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} src={page} />
    </div>
  )
}
