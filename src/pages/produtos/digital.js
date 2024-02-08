import CTABanner from '@/components/common/CTABanner';
import CallToAction from '@/components/common/CallToAction';
import Section from '@/components/common/Section';
import Benefits from '@/components/digital/Benefits';
import Details from '@/components/digital/Details';
import fetchAPI, { getLayoutContent } from '@/utils/fetch';
import Head from 'next/head';

export default function Digital({ digital }) {

  return (
    <>
      <Head>
        <title>Impressão Digital - Embasul</title>
      </Head>

      <main>
        <Section id="inicio">
          <CTABanner content={digital.banner} />
        </Section>

        <Section id="detalhes" pt="96">
          <Details content={digital.details} />
        </Section>

        <Section id="beneficios" pt="120" pb="120">
          <Benefits content={digital.benefits} />
        </Section>

        <Section id="chamada" mb="120">
          <CallToAction content={digital.cta} />
        </Section>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const digital = await fetchAPI('digital-printing');
  const layout = await getLayoutContent();

  return {
    props: {
      digital,

      layout
    },

    revalidate: 60,
  }
}