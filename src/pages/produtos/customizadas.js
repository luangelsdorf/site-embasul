import CallToAction from '@/components/common/CallToAction';
import Section from '@/components/common/Section';
import SimpleBanner from '@/components/common/SimpleBanner';
import Details from '@/components/custom/Details';
import fetchAPI, { getLayoutContent } from '@/utils/fetch';
import Head from 'next/head';

export default function Custom({ custom }) {

  return (
    <>
      <Head>
        <title>Composições Customizadas - Embasul</title>
      </Head>

      <main>
        <Section id="inicio">
          <SimpleBanner height={400}>
            <p className="overline">{custom.banner.overline}</p>
            <h1 className="display-1">{custom.banner.title}</h1>
          </SimpleBanner>
        </Section>

        <Section id="detalhes" pt="128 80" pb="120">
          <Details content={custom.content} />
        </Section>

        <Section mb="120 0">
          <CallToAction long content={custom.cta} />
        </Section>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const custom = await fetchAPI('custom-composition');
  const layout = await getLayoutContent();

  return {
    props: {
      custom,

      layout
    },

    revalidate: 60,
  }
}