import Trabalhe from 'public/images/gambi/people/trabalhe-conosco.svg';
import Pessoas from 'public/images/gambi/people/pessoas.svg';
import Canal from 'public/images/gambi/people/canal-etica.svg';
import Codigo from 'public/images/gambi/people/codigo-etica.svg';
import Head from 'next/head';
import Image from 'next/image';

export default function People() {
  return (
    <div>
      <Head>
        <title>Pessoas | Embasul</title>
      </Head>

      <Trabalhe style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} />
      <Pessoas style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} />
      <Canal style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} />
      <Codigo style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} />
    </div>
  )
}
