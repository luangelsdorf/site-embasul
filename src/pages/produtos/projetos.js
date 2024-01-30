import Section from '@/components/common/Section';
import Filter from '@/components/portfolio/Filter';
import fetchAPI, { getLayoutContent } from '@/utils/fetch';
import Head from 'next/head';

export default function Projects({ projects, portfolio, categories }) {

  return (
    <>
      <Head>
        <title>Projetos - Embasul</title>
      </Head>

      <main>

        <Section id="projetos" pt="176" pb="96">
          <Filter content={projects} categories={categories} portfolio={portfolio} />
        </Section>

      </main>
    </>
  )
}

export async function getStaticProps() {
  const projects = await fetchAPI('project');
  const portfolio = await fetchAPI('portfolio', { 'populate[1]': 'cover', 'populate[2]': 'categories', 'populate[3]': 'gallery' });
  const categories = await fetchAPI('project-categories', { populate: false });
  const layout = await getLayoutContent();

  return {
    props: {
      projects,
      portfolio,
      categories,

      layout
    }
  }
}