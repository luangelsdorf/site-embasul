import CTABanner from '@/components/common/CTABanner';
import CallToAction from '@/components/common/CallToAction';
import Section from '@/components/common/Section';
import Highlights from '@/components/flexo/Highlights';
import fetchAPI, { getLayoutContent } from '@/utils/fetch';
import Head from 'next/head';

export default function Flexo({ flexo }) {

  return (
    <>
      <Head>
        <title>Impressão Flexográfica - Embasul</title>
      </Head>

      <main>
        <Section id="inicio">
          <CTABanner content={flexo.banner} />
        </Section>

        <Section id="destaques" pt="96 80" pb="120 80">
          <Highlights content={flexo.highlights} />
        </Section>

        <Section id="chamada" mb="120">
          <CallToAction content={flexo.cta} />
        </Section>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const flexo = await fetchAPI('flexo');
  const layout = await getLayoutContent();

  return {
    props: {
      flexo,

      layout
    }
  }
}