import banner from 'public/images/gambi/sustain/Banner.png';
import fsc from 'public/images/gambi/sustain/fsc.png';
import origem from 'public/images/gambi/sustain/origem-sustentavel.png';
import pegada from 'public/images/gambi/sustain/pegada-neutra.png';
import cts from 'public/images/gambi/sustain/cts.png';
import politica from 'public/images/gambi/sustain/politica.png';
import Head from 'next/head';

export default function People() {
  return (
    <div>
      <Head>
        <title>Pessoas | Embasul</title>
      </Head>

      <Image style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} src={banner} />
      <Image id="fsc" style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} src={fsc} />
      <Image id="origem-sustentavel" style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} src={origem} />
      <Image id="pegada-neutra.png" style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} src={pegada} />
      <Image id="cts" style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} src={cts} />
      <Image id="politica" style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} src={politica} />
    </div>
  )
}
