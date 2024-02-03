import Section from '@/components/common/Section';
import Banner from '@/components/sustain/Banner';
import Highlights from '@/components/sustain/Highlights';
import Policy from '@/components/sustain/Policy';
import fetchAPI, { getLayoutContent } from '@/utils/fetch';
import Head from 'next/head';

export default function Sustainability({ sustain }) {

  return (
    <>
      <Head>
        <title>Sustentabilidade - Embasul</title>
      </Head>

      <main>
        <Section id="inicio">
          <Banner content={sustain.banner} />
        </Section>

        <Section id="destaques" mt="96">
          <Highlights content={sustain.highlights} />
        </Section>

        <Section id="politica" pt="120 80" pb="120 80" style={{backgroundColor: '#f2f2f2'}}>
          <Policy content={sustain.policy} />
        </Section>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const sustain = await fetchAPI('sustainability');
  const layout = await getLayoutContent();

  return {
    props: {
      sustain,

      layout
    }
  }
}