import Head from "next/head";
import Image from "next/image";
import Customizadas from 'public/images/gambi/products/customizadas.svg';

export default function Support() {
  return (
    <div>
      <Head>
        <title>Flexo-Digital | Embasul</title>
      </Head>

      <Customizadas style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} />
    </div>
  )
}
