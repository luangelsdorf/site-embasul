import CTABanner from '@/components/common/CTABanner';
import CallToAction from '@/components/common/CallToAction';
import Section from '@/components/common/Section';
import Highlights from '@/components/flexo/Highlights';
import fetchAPI, { getLayoutContent } from '@/utils/fetch';
import Head from 'next/head';

export default function Support({ support }) {

  return (
    <>
      <Head>
        <title>Suporte Técnico - Embasul</title>
      </Head>

      <main>
        <Section id="inicio">
          <CTABanner content={support.banner} />
        </Section>

        <Section id="destaques" pt="96 80" pb="120 80">
          <Highlights content={support.highlights} />
        </Section>

        <Section id="chamada" mb="120">
          <CallToAction content={support.cta} />
        </Section>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const support = await fetchAPI('tech-support');
  const layout = await getLayoutContent();

  return {
    props: {
      support,

      layout
    }
  }
}