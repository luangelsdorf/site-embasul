import Head from "next/head";
import estrutura from 'public/images/gambi/company/estrutura.png';
import historia from 'public/images/gambi/company/historia.png';
import norteadores from 'public/images/gambi/company/norteadores.png';
import Image from "next/image";

export default function Company() {

  return (
    <>
      <Head>
        <title>Empresa - Embasul</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* <Structure style={{ width: '100%', height: 'auto', }} /> */}
      {/* <div style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '80px', background: '#006CCC'}} /> */}
      <Image id="estrutura" quality={100} style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} src={estrutura} />
      <Image id="historia" quality={100} style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} src={historia} />
      <Image id="norteadores" quality={100} style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} src={norteadores} />
    </>
  );
}
