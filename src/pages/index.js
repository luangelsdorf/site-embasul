import Section from '@/components/common/Section';
import Banner from '@/components/home/Banner';
import Certificates from '@/components/home/Certificates';
import Portfolio from '@/components/home/Portfolio';
import ServiceHighlights from '@/components/home/ServiceHighlights';
import Sustainability from '@/components/home/Sustainability';
import Footer from '@/components/layout/Footer';
import fetchAPI, { getLayoutContent } from '@/utils/fetch';
import Head from 'next/head';

export default function Home({ home, portfolio, }) {

  return (
    <>
      <Head>
        <title>Embasul</title>
      </Head>

      <main>
        <Section id="home">
          <Banner content={home.banner} />
        </Section>

        <Section pt="140 96" pb="120" id="portfolio">
          <Portfolio content={home.cases} projects={portfolio} />
        </Section>

        <Section id="destaques" mb="0 104">
          <ServiceHighlights content={home.serviceHighlights} />
        </Section>

        <Section id="sustentabilidade">
          <Sustainability content={home.sustainability} />
        </Section>

        <Section pt="120" pb="120" id="certificados">
          <Certificates content={home.certificates} />
        </Section>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const home = await fetchAPI('home');
  const portfolio = await fetchAPI('portfolio', { populate: '*' });
  const layout = await getLayoutContent();

  return {
    props: {
      home,
      portfolio,

      layout
    },

    revalidate: 60,
  }
}