import Section from '@/components/common/Section';
import Structure from '@/components/company/Structure';
import fetchAPI, { getLayoutContent } from '@/utils/fetch';
import Head from 'next/head';

export default function Company({ company }) {

  return (
    <>
      <Head>
        <title>A Empresa - Embasul</title>
      </Head>

      <main>
        <Section id="estrutura" pt="176" pb="0">
          <Structure content={company.structure} />
        </Section>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const company = await fetchAPI('company');
  const layout = await getLayoutContent();

  return {
    props: {
      company,

      layout
    }
  }
}