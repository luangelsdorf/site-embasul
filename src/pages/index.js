import Section from '@/components/common/Section';
import Banner from '@/components/home/Banner';
import Portfolio from '@/components/home/Portfolio';
import ServiceHighlights from '@/components/home/ServiceHighlights';
import Sustainability from '@/components/home/Sustainability';
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

        <Section pt="140" pb="120" id="portfolio">
          <Portfolio content={home.cases} projects={portfolio.slice(0, 3)} />
        </Section>

        <Section id="destaques">
          <ServiceHighlights content={home.serviceHighlights} />
        </Section>

        <Section id="sustentabilidade">
          <Sustainability content={home.sustainability} />
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
    }
  }
}