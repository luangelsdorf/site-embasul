import Head from "next/head";
import Image from "next/image";
import flexo from 'public/images/gambi/products/flexografica.png';

export default function Flexo() {
  return (
    <div>
      <Head>
        <title>Impressão Flexográfica | Embasul</title>
      </Head>

      <Image id="flexografica" style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} src={flexo} />
    </div>
  )
}
