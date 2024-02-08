import CTABanner from '@/components/common/CTABanner';
import CallToAction from '@/components/common/CallToAction';
import Section from '@/components/common/Section';
import Highlights from '@/components/flexo/Highlights';
import fetchAPI, { getLayoutContent } from '@/utils/fetch';
import Head from 'next/head';

export default function PackagingDesign({ design }) {

  return (
    <>
      <Head>
        <title>Design de Embalagens - Embasul</title>
      </Head>

      <main>
        <Section id="inicio">
          <CTABanner content={design.banner} />
        </Section>

        <Section id="destaques" pt="96 80" pb="120 80">
          <Highlights design content={design.highlights} />
        </Section>

        <Section id="chamada" mb="120">
          <CallToAction content={design.cta} />
        </Section>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const design = await fetchAPI('packaging-design');
  const layout = await getLayoutContent();

  return {
    props: {
      design,

      layout
    },

    revalidate: 60,
  }
}