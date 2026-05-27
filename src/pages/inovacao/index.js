import CallToAction from '@/components/common/CallToAction';
import Section from '@/components/common/Section';
import SimpleBanner from '@/components/common/SimpleBanner';
import DesignHighlights from '@/components/design-ai/Highlights';
import IsoBanner from '@/components/iso/Banner';
import IsoHighlights from '@/components/iso/Highlights';
import fetchAPI, { getLayoutContent } from '@/utils/fetch';
import Head from 'next/head';

export default function Inovacao({ designAI, iso }) {

  return (
    <>
      <Head>
        <title>Inovação - Embasul</title>
      </Head>

      <main>
        {/* Design AI Section */}
        <div id="design-com-ai">
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

        <Section id="destaques-design" pt="96 40" pb="120 40">
          <DesignHighlights note={designAI.imageNote} content={designAI.highlights} />
          </Section>
        </div>

        {/* ISO9001 Section */}
        <Section id="processos-iso">
          <IsoBanner content={iso.banner} />
        </Section>

        <Section id="destaques-iso" pt="96 40" pb="120 40">
          <IsoHighlights content={iso.highlights} />
        </Section>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const designAI = await fetchAPI('ai-design');
  const iso = await fetchAPI('processos-iso-9001');
  const layout = await getLayoutContent();

  return {
    props: {
      designAI,
      iso,
      layout
    },

    revalidate: 60,
  }
}
