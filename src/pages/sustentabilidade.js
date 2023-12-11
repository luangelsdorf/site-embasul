import Banner from 'public/images/gambi/sustain/Banner.svg';
import Fsc from 'public/images/gambi/sustain/fsc.svg';
import Origem from 'public/images/gambi/sustain/origem-sustentavel.svg';
import Pegada from 'public/images/gambi/sustain/pegada-neutra.svg';
import Cts from 'public/images/gambi/sustain/cts.svg';
import Politica from 'public/images/gambi/sustain/politica.svg';
import Image from 'next/image';
import Head from 'next/head';

export default function Sustainability() {
  return (
    <div>
      <Head>
        <title>Sustentabilidade | Embasul</title>
      </Head>

      <Banner style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} />
      <Fsc style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} />
      <Origem style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} />
      <Pegada style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} />
      <Cts style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} />
      <Politica style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} />
    </div>
  )
}
