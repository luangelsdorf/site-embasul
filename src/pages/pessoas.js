import CTABanner from '@/components/common/CTABanner';
import Section from '@/components/common/Section';
import CodeOfConduct from '@/components/people/CodeOfConduct';
import EthicsChannel from '@/components/people/EthicsChannel';
import PeopleSection from '@/components/people/PeopleSection';
import fetchAPI, { getLayoutContent } from '@/utils/fetch';
import Head from 'next/head';

export default function People({ people }) {

  return (
    <>
      <Head>
        <title>Pessoas - Embasul</title>
      </Head>

      <main>
        <Section id="trabalhe-conosco">
          <CTABanner people content={people.banner} />
        </Section>

        <Section id="pessoas" pt="96" pb="120">
          <PeopleSection content={people.people} />
        </Section>

        <Section id="canal-etica" pb="120">
          <EthicsChannel content={people.ethicsChannel} />
        </Section>

        <Section id="codigo-etica" pb="120">
          <CodeOfConduct content={people.ethicsAndConduct} />
        </Section>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const people = await fetchAPI('people');
  const layout = await getLayoutContent();

  return {
    props: {
      people,

      layout
    }
  }
}