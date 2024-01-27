import CallToAction from '@/components/common/CallToAction';
import Section from '@/components/common/Section';
import SimpleBanner from '@/components/common/SimpleBanner';
import Highlights from '@/components/design-ai/Highlights';
import fetchAPI, { getLayoutContent } from '@/utils/fetch';
import Head from 'next/head';

export default function ISO9001({ designAI }) {

  return (
    <>
      <Head>
        <title>Design com AI - Embasul</title>
      </Head>

      <main>
        <SimpleBanner height={586} marginTop={56}>
          <p className="overline">{designAI.banner.overline}</p>
          <h1 className="display-1">{designAI.banner.title}</h1>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-8">
                <p>{designAI.banner.text}</p>
              </div>
            </div>
          </div>
        </SimpleBanner>

        <Section id="destaques" pt="96" pb="120">
          <Highlights note={designAI.imageNote } content={designAI.highlights} />
        </Section>

        <Section id="chamada" mb="120">
          <CallToAction content={designAI.cta} />
        </Section>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const designAI = await fetchAPI('ai-design');
  const layout = await getLayoutContent();

  return {
    props: {
      designAI,

      layout
    }
  }
}