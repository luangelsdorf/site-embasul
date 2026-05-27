import CallToAction from '@/components/common/CallToAction'
import Section from '@/components/common/Section'
import Banner from '@/components/contact/Banner'
import Form from '@/components/contact/Form'
import fetchAPI, { getLayoutContent } from '@/utils/fetch'
import Head from 'next/head'

export default function TrabalheConosco({ contact }) {
  return (
    <>
      <Head>
        <title>Trabalhe Conosco - Embasul</title>
      </Head>

      <main>
        <Section id="inicio">
          <Banner />
        </Section>

        <Section id="form">
          <Form resume showInfo content={contact} />
        </Section>

        <Section pt="120 0" pb="120 0">
          <CallToAction content={contact.cta} contact />
        </Section>
      </main>
    </>
  )
}

export async function getStaticProps({ locale }) {
  const contact = await fetchAPI('contact', { locale });
  const layout = await getLayoutContent(locale);

  return {
    props: {
      contact,

      layout
    },

    revalidate: 60,
  }
}
