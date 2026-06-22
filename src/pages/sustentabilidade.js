import Section from '@/components/common/Section';
import Banner from '@/components/sustain/Banner';
import Highlights from '@/components/sustain/Highlights';
import Policy from '@/components/sustain/Policy';
import fetchAPI, { getLayoutContent } from '@/utils/fetch';
import { t } from '@/utils/translations';
import { useRouter } from 'next/router';
import Seo from '@/components/common/Seo';

export default function Sustainability({ sustain }) {
  const { locale } = useRouter();

  return (
    <>
      <Seo title={t('title.sustainability', locale)} description={t('desc.sustainability', locale)} />

      <main>
        <Section id="inicio">
          <Banner content={sustain.banner} />
        </Section>

        <Section id="destaques" mt="96">
          <Highlights content={sustain.highlights} />
        </Section>

        <Section id="politica" pt="120 80" pb="120 80" style={{backgroundColor: '#f2f2f2'}}>
          <Policy content={sustain.policy} />
        </Section>
      </main>
    </>
  )
}

export async function getStaticProps({ locale }) {
  const sustain = await fetchAPI('sustainability', { locale });
  const layout = await getLayoutContent(locale);

  return {
    props: {
      sustain,

      layout
    },

    revalidate: 60,
  }
}