import Head from "next/head";
import Image from "next/image";
import digital from 'public/images/gambi/products/digital.png';

export default function Digital() {
  return (
    <div>
      <Head>
        <title>Impressão Digital | Embasul</title>
      </Head>

      <Image id="digital" style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} src={digital} />
    </div>
  )
}
