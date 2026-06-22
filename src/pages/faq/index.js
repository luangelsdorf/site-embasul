import Section from '@/components/common/Section';
import SimpleBanner from '@/components/common/SimpleBanner';
import FaqList from '@/components/faq/FaqList';
import fetchAPI, { getLayoutContent } from '@/utils/fetch';
import Seo from '@/components/common/Seo';
import { t } from '@/utils/translations';
import { useRouter } from 'next/router';

const HEADLINE = { overline: 'Ajuda', title: 'Perguntas frequentes' };

export default function Faq({ items, categories }) {
  const { locale } = useRouter();
  return (
    <>
      <Seo title="FAQ" description={t('desc.faq', locale)} />

      <main>
        <SimpleBanner height={440} marginTop={56}>
          <p className="overline">{HEADLINE.overline}</p>
          <h1 className="display-1">{HEADLINE.title}</h1>
        </SimpleBanner>

        <Section id="faq" pt="120 64" pb="120 64">
          <FaqList items={items} categories={categories} />
        </Section>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const items = await fetchAPI('faq-items', { populate: 'deep', sort: 'order:asc', locale });
  const categories = await fetchAPI('faq-categories', { populate: false, locale });
  const layout = await getLayoutContent(locale);

  return {
    props: {
      items,
      categories,

      layout,
    },

    revalidate: 60,
  };
}
