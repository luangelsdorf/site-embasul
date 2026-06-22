import Section from '@/components/common/Section';
import SimpleBanner from '@/components/common/SimpleBanner';
import DesignHighlights from '@/components/design-ai/Highlights';
import IsoBanner from '@/components/iso/Banner';
import IsoHighlights from '@/components/iso/Highlights';
import fetchAPI, { getLayoutContent } from '@/utils/fetch';
import { t } from '@/utils/translations';
import { useRouter } from 'next/router';
import Seo from '@/components/common/Seo';

export default function Inovacao({ designAI, iso }) {
  const { locale } = useRouter();
  return (
    <>
      <Seo title={t('title.innovation', locale)} description={t('desc.innovation', locale)} />

      <main>
        {/* Design com AI */}
        <Section id="design-ai">
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
        </Section>
        <Section pt="96 40" pb="120 40">
          <DesignHighlights note={designAI.imageNote} content={designAI.highlights} />
        </Section>

        {/* Processos ISO 9001 */}
        <Section id="iso9001">
          <IsoBanner content={iso.banner} />
        </Section>
        <Section pt="96 40" pb="120 40">
          <IsoHighlights content={iso.highlights} />
        </Section>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const [designAI, iso, layout] = await Promise.all([
    fetchAPI('ai-design', { locale }),
    fetchAPI('processos-iso-9001', { locale }),
    getLayoutContent(locale),
  ]);

  return {
    props: {
      designAI,
      iso,

      layout,
    },

    revalidate: 60,
  };
}
