import Section from '@/components/common/Section';
import SimpleBanner from '@/components/common/SimpleBanner';
import fetchAPI, { getLayoutContent } from '@/utils/fetch';
import Head from 'next/head';

export default function Custom({ custom }) {
  console.log(custom);

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
      </main>
    </>
  )
}

export async function getStaticProps() {
  const custom = await fetchAPI('custom-composition', { populate: '*' });
  const layout = await getLayoutContent();

  return {
    props: {
      custom,

      layout
    }
  }
}