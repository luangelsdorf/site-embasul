import CallToAction from '@/components/common/CallToAction'
import Section from '@/components/common/Section'
import Banner from '@/components/contact/Banner'
import Form from '@/components/contact/Form'
import fetchAPI, { getLayoutContent } from '@/utils/fetch'
import Head from 'next/head'
import React from 'react'

export default function Contato({ contact }) {
  return (
    <>
      <Head>
        <title>Contato - Embasul</title>
      </Head>

      <main>
        <Section id="inicio">
          <Banner />
        </Section>

        <Section id="form">
          <Form content={contact} />
        </Section>

        <Section pt="120 0" pb="120 0">
          <CallToAction content={contact.cta} contact />
        </Section>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const contact = await fetchAPI('contact');
  const layout = await getLayoutContent();

  return {
    props: {
      contact,

      layout
    },

    revalidate: 60,
  }
}