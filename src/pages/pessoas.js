import trabalhe from 'public/images/gambi/people/trabalhe-conosco.png';
import pessoas from 'public/images/gambi/people/pessoas.png';
import canal from 'public/images/gambi/people/canal-etica.png';
import codigo from 'public/images/gambi/people/codigo-etica.png';
import Head from 'next/head';
import Image from 'next/image';

export default function People() {
  return (
    <div>
      <Head>
        <title>Pessoas | Embasul</title>
      </Head>

      <Image id="trabalhe-conosco" style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} src={trabalhe} />
      <Image id="pessoas" style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} src={pessoas} />
      <Image id="canal-etica" style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} src={canal} />
      <Image id="codigo-etica" style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} src={codigo} />
    </div>
  )
}
