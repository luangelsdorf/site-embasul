import ResumeForm from '@/components/contact/ResumeForm'
import fetchAPI, { getLayoutContent } from '@/utils/fetch';
import Head from 'next/head';
import React from 'react'

export default function WorkWithUs({ contact }) {
  return (
    <>
      <Head>
        <title>Trabalhe Conosco - Embasul</title>
      </Head>

      <main>
        <ResumeForm content={contact} />
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