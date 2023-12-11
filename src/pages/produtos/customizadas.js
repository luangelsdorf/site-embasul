import Head from "next/head";
import Image from "next/image";
import Customizadas from 'public/images/gambi/products/customizadas.svg';

export default function Customization() {
  return (
    <div>
      <Head>
        <title>Composições Customizadas | Embasul</title>
      </Head>

      <Customizadas id="customizadas" style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} />
    </div>
  )
}
