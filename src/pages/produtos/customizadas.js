import Head from "next/head";
import Image from "next/image";
import customizadas from 'public/images/gambi/products/customizadas.png';

export default function Customization() {
  return (
    <div>
      <Head>
        <title>Composições Customizadas | Embasul</title>
      </Head>

      <Image id="customizadas" style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} src={customizadas} />
    </div>
  )
}
