import Section from '@/components/common/Section';
import Filter from '@/components/portfolio/Filter';
import fetchAPI, { getLayoutContent } from '@/utils/fetch';
import { t } from '@/utils/translations';
import { useRouter } from 'next/router';
import Seo from '@/components/common/Seo';

export default function Projects({ projects, portfolio, categories }) {
  const { locale } = useRouter();

  return (
    <>
      <Seo title={t('title.projects', locale)} description={t('desc.projects', locale)} />

      <main>

        <Section id="projetos" pt="176" pb="96">
          <Filter content={projects} categories={categories} portfolio={portfolio} />
        </Section>

      </main>
    </>
  )
}

export async function getStaticProps({ locale }) {
  const projects = await fetchAPI('project', { locale });
  const portfolio = await fetchAPI('portfolio', { populate: 'deep', locale, sort: 'createdAt:desc' });
  const categories = await fetchAPI('project-categories', { populate: false, locale });
  const layout = await getLayoutContent(locale);

  return {
    props: {
      projects,
      portfolio,
      categories,

      layout
    },

    revalidate: 60,
  }
}