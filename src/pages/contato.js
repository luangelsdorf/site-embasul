import CallToAction from '@/components/common/CallToAction'
import Section from '@/components/common/Section'
import Banner from '@/components/contact/Banner'
import Head from 'next/head'
import React from 'react'

export default function Contato() {
  return (
    <>
      <Head>
        <title>Contato - Embasul</title>
      </Head>

      <main>
        <Section id="inicio">
          <Banner />
        </Section>

        <Section pt="120 80" pb="120 80">
          <CallToAction content={{
            text: 'Conheça mais sobre \na Embasul Embalagens',
            linkUrl: '/empresa',
            linkText: 'Assistir Vídeo'
          }}
            contact
          />
        </Section>
      </main>
    </>
  )
}
