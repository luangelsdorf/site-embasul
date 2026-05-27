import CTABanner from '@/components/common/CTABanner';
import Section from '@/components/common/Section';
import SimpleBanner from '@/components/common/SimpleBanner';
import DigitalDetails from '@/components/digital/Details';
import Benefits from '@/components/digital/Benefits';
import Highlights from '@/components/flexo/Highlights';
import CustomDetails from '@/components/custom/Details';
import fetchAPI, { getLayoutContent } from '@/utils/fetch';
import Head from 'next/head';

export default function Produtos({ digital, flexo, custom, support, design }) {
  return (
    <>
      <Head>
        <title>Produtos - Embasul</title>
      </Head>

      <main>
        {/* Impressão Digital */}
        <Section id="digital">
          <CTABanner noCta content={digital.banner} />
        </Section>
        <Section pt="96" pb="120">
          <DigitalDetails content={digital.details} />
        </Section>
        <Section pb="120">
          <Benefits content={digital.benefits} />
        </Section>

        {/* Impressão Flexográfica */}
        <Section id="flexo">
          <CTABanner noCta content={flexo.banner} />
        </Section>
        <Section pt="96 80" pb="120 80">
          <Highlights content={flexo.highlights} />
        </Section>

        {/* Customizadas */}
        <Section id="customizadas">
          <SimpleBanner height={400}>
            <p className="overline">{custom.banner.overline}</p>
            <h1 className="display-1">{custom.banner.title}</h1>
          </SimpleBanner>
        </Section>
        <Section pt="128 80" pb="120">
          <CustomDetails content={custom.content} />
        </Section>

        {/* Suporte Técnico */}
        <Section id="suporte">
          <CTABanner noCta content={support.banner} />
        </Section>
        <Section pt="96 80" pb="120 80">
          <Highlights content={support.highlights} />
        </Section>

        {/* Design de Embalagens */}
        <Section id="design-embalagens">
          <CTABanner noCta content={design.banner} />
        </Section>
        <Section pt="96 80" pb="120 80">
          <Highlights design content={design.highlights} />
        </Section>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const [digital, flexo, custom, support, design, layout] = await Promise.all([
    fetchAPI('digital-printing', { locale }),
    fetchAPI('flexo', { locale }),
    fetchAPI('custom-composition', { locale }),
    fetchAPI('tech-support', { locale }),
    fetchAPI('packaging-design', { locale }),
    getLayoutContent(locale),
  ]);

  return {
    props: {
      digital,
      flexo,
      custom,
      support,
      design,

      layout,
    },

    revalidate: 60,
  };
}
