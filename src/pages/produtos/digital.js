import CTABanner from '@/components/common/CTABanner';
import Section from '@/components/common/Section';
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
    }
  }
}