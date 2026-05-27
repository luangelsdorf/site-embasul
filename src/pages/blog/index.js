import Section from '@/components/common/Section';
import SimpleBanner from '@/components/common/SimpleBanner';
import PostList from '@/components/blog/PostList';
import fetchAPI, { getLayoutContent } from '@/utils/fetch';
import Head from 'next/head';

const DEFAULT_HEADLINE = { overline: 'Blog', title: 'Conteúdo, novidades e bastidores' };

export default function Blog({ blogPage, posts, categories }) {
  const headline = {
    overline: blogPage?.overline ?? DEFAULT_HEADLINE.overline,
    title: blogPage?.title ?? DEFAULT_HEADLINE.title,
  };

  return (
    <>
      <Head>
        <title>Blog - Embasul</title>
      </Head>

      <main>
        <SimpleBanner height={440} marginTop={56}>
          {headline.overline && <p className="overline">{headline.overline}</p>}
          <h1 className="display-1">{headline.title}</h1>
        </SimpleBanner>

        <Section id="blog" pt="120 64" pb="120 64">
          <PostList posts={posts} categories={categories} />
        </Section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const posts = await fetchAPI('posts', { populate: 'deep', sort: 'publishedDate:desc' });
  const categories = await fetchAPI('post-categories', { populate: false });
  const blogPage = await fetchAPI('blog-page', { populate: 'deep' });
  const layout = await getLayoutContent();

  return {
    props: {
      blogPage,
      posts,
      categories,

      layout,
    },

    revalidate: 60,
  };
}
