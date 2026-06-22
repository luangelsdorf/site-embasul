import Section from '@/components/common/Section';
import PostHeader from '@/components/blog/PostHeader';
import PostContent from '@/components/blog/PostContent';
import RelatedPosts from '@/components/blog/RelatedPosts';
import fetchAPI, { getLayoutContent } from '@/utils/fetch';
import { getExcerpt } from '@/utils/helpers';
import { apiURL } from '@/utils/env';
import Seo from '@/components/common/Seo';

export default function Post({ post, related }) {
  if (!post) return null;

  const metaDescription = getExcerpt(post.content ?? '', 30);
  const coverUrl = post.cover?.data?.attributes?.url;
  const ogImage = coverUrl ? `${apiURL}${coverUrl}` : undefined;

  return (
    <>
      <Seo title={post.title} description={metaDescription} image={ogImage} type="article" />

      <main>
        <Section id="post" pt="176" pb="64">
          <PostHeader
            title={post.title}
            cover={post.cover}
            publishedDate={post.publishedDate}
            category={post.category}
          />
        </Section>

        <Section pb="120 64">
          <PostContent html={post.content} />
        </Section>

        {related?.length > 0 && (
          <RelatedPosts posts={related} />
        )}
      </main>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params, locale }) {
  const matches = await fetchAPI('posts', { 'filters[slug][$eq]': params.slug,
    populate: 'deep', locale });

  const postEntity = matches?.[0];
  const post = postEntity?.attributes ?? null;

  if (!post) {
    // Check if the slug belongs to another locale
    const anyMatches = await fetchAPI('posts', { 'filters[slug][$eq]': params.slug,
      populate: 'deep', locale: 'all' });
    const anyPost = anyMatches?.[0]?.attributes;

    if (anyPost) {
      const loc = anyPost.localizations?.data?.find(l => l.attributes.locale === locale);
      if (loc) {
        return {
          redirect: {
            destination: `/${locale === 'pt-BR' ? '' : locale + '/'}blog/${loc.attributes.slug}`,
            permanent: false,
          }
        };
      } else {
        return {
          redirect: {
            destination: `/${locale === 'pt-BR' ? '' : locale + '/'}blog`,
            permanent: false,
          }
        };
      }
    }

    return { notFound: true, revalidate: 60 };
  }

  // If post was found via fallback and not in the requested locale
  if (post && post.locale !== locale) {
    const loc = post.localizations?.data?.find(l => l.attributes.locale === locale);
    if (loc) {
      return {
        redirect: {
          destination: `/${locale === 'pt-BR' ? '' : locale + '/'}blog/${loc.attributes.slug}`,
          permanent: false,
        }
      };
    }
  }

  let related = [];
  const categorySlug = post.category?.data?.attributes?.slug;

  if (categorySlug) {
    const sameCategory = await fetchAPI('posts', { 'filters[category][slug][$eq]': categorySlug,
      sort: 'publishedDate:desc',
      'pagination[limit]': 4,
      populate: 'deep', locale });
    related = (sameCategory || []).filter(p => p.attributes.slug !== params.slug).slice(0, 3);
  }

  if (related.length < 3) {
    const knownSlugs = new Set([params.slug, ...related.map(r => r.attributes.slug)]);
    const latest = await fetchAPI('posts', { sort: 'publishedDate:desc',
      'pagination[limit]': 6,
      populate: 'deep', locale });
    const fillers = (latest || []).filter(p => !knownSlugs.has(p.attributes.slug)).slice(0, 3 - related.length);
    related = [...related, ...fillers];
  }

  const layout = await getLayoutContent(locale);

  return {
    props: {
      post,
      related,

      layout,
    },

    revalidate: 60,
  };
}
