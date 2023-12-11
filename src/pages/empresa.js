import Head from "next/head";
import Estrutura from 'public/images/gambi/company/estrutura.svg';
import Historia from 'public/images/gambi/company/historia.svg';
import Norteadores from 'public/images/gambi/company/norteadores.svg';
import Image from "next/image";

export default function Company() {

  return (
    <>
      <Head>
        <title>Empresa - Embasul</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Estrutura id="estrutura" style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} />
      <Historia id="historia" style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} />
      <Norteadores id="norteadores" style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} />
    </>
  );
}
