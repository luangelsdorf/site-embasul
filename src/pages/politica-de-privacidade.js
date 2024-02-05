import Section from '@/components/common/Section'
import SimpleBanner from '@/components/common/SimpleBanner'
import fetchAPI, { getLayoutContent } from '@/utils/fetch'
import Head from 'next/head'
import React from 'react'

export default function PrivacyPolicy({ policy }) {

  return (
    <div>
      <Head>
        <title>Política de Privacidade - Embasul</title>
      </Head>

      <Section>
        <SimpleBanner height={400}>
          <p className="overline">Nossos Termos</p>
          <h1>Política de Privacidade</h1>
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

export async function getStaticProps() {
  const policy = await fetchAPI('politica-de-privacidade');
  const layout = await getLayoutContent();

  return {
    props: {
      policy,

      layout
    }
  }
}