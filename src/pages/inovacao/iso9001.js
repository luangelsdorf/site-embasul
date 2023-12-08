import Head from "next/head";
import Image from "next/image";
import page from 'public/images/gambi/iso/page.png';

export default function Iso() {
  return (
    <div>
      <Head>
        <title>Processos ISO9001 | Embasul</title>
      </Head>

      <Image id="page" style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} src={page} />
    </div>
  )
}
