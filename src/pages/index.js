import fetchAPI, { getLayoutContent } from '@/utils/fetch';
import Head from 'next/head';

export default function Home({ home }) {


  return (
    <>
      <Head>
        <title>Embasul</title>
      </Head>

      <main>

      </main>
    </>
  )
}

export async function getStaticProps() {
  const home = await fetchAPI('home');
  const layout = await getLayoutContent();

  return {
    props: {
      home,

      layout
    }
  }
}