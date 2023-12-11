import Head from "next/head";
import Image from "next/image";
import Page from 'public/images/gambi/iso/page.svg';

export default function Iso() {
  return (
    <div>
      <Head>
        <title>Processos ISO9001 | Embasul</title>
      </Head>

      <Page id="page" style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} />
    </div>
  )
}
