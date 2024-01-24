import Section from '@/components/common/Section';
import Future from '@/components/company/Future';
import History from '@/components/company/History';
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

        <Section id="historia" pt="120 80" pb="120 80">
          <History content={company.history} />
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