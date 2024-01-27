import CallToAction from '@/components/common/CallToAction';
import Section from '@/components/common/Section';
import Banner from '@/components/iso/Banner';
import Highlights from '@/components/iso/Highlights';
import fetchAPI, { getLayoutContent } from '@/utils/fetch';
import Head from 'next/head';

export default function ISO9001({ iso }) {

  return (
    <>
      <Head>
        <title>Processos ISO9001 - Embasul</title>
      </Head>

      <main>
        <Section id="inicio">
          <Banner content={iso.banner} />
        </Section>

        <Section id="destaques" pt="96" pb="120">
          <Highlights content={iso.highlights} />
        </Section>

        <Section id="chamada" mb="120">
          <CallToAction content={iso.cta} />
        </Section>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const iso = await fetchAPI('processos-iso-9001');
  const layout = await getLayoutContent();

  return {
    props: {
      iso,

      layout
    }
  }
}