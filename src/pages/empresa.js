import Slider from "react-slick";
import Structure from 'public/images/svg/Estrutura.svg';
import Head from "next/head";
import banner from 'public/images/svg/empresa/page.png'
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
      <Image quality={100} style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} src={banner} />
    </>
  );
}
