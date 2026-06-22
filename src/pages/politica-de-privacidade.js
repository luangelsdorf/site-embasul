import Section from '@/components/common/Section'
import SimpleBanner from '@/components/common/SimpleBanner'
import fetchAPI, { getLayoutContent } from '@/utils/fetch'
import { t } from '@/utils/translations'
import { useRouter } from 'next/router'
import Seo from '@/components/common/Seo'
import React from 'react'

export default function PrivacyPolicy({ policy }) {
  const { locale } = useRouter();

  return (
    <div>
      <Seo title={t('title.privacy', locale)} description={t('desc.privacy', locale)} />

      <Section>
        <SimpleBanner height={400}>
          <p className="overline">{t('privacy.overline', locale)}</p>
          <h1>{t('title.privacy', locale)}</h1>
        </SimpleBanner>

        <Section pt="120 80" pb="120 80">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <div dangerouslySetInnerHTML={{ __html: policy.text }} />
              </div>
            </div>
          </div>
        </Section>
      </Section>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  const policy = await fetchAPI('politica-de-privacidade', { locale });
  const layout = await getLayoutContent(locale);

  return {
    props: {
      policy,

      layout
    },

    revalidate: 60,
  }
}