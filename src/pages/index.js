import Head from 'next/head';
import Header from 'public/images/svg/Heading.svg';
import Banner from 'public/images/banner.svg';
import Cases from 'public/images/svg/Portfolio.svg';
import Sustainability from 'public/images/svg/sust.svg';
import Certifications from 'public/images/svg/cert.svg';
import Footer from 'public/images/footer.svg';
/* import cases from 'public/images/cases.png'; */



import Delivery from 'public/images/svg/blocks/delivery.svg';
import Highlight from 'public/images/svg/blocks/lots.svg';
import Lots from 'public/images/svg/blocks/products-1.svg';
import People from 'public/images/svg/blocks/products-2.svg';
import Products from 'public/images/svg/blocks/people.svg';
import WorkWithUs from 'public/images/svg/blocks/work.svg';

import { useEffect } from 'react';
import Image from 'next/image';
import PictureAndText from '@/components/PictureAndText';
import Slider from 'react-slick';

export default function HomePage() {

  return (
    <>
      <Head>
        <title>Embasul</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>

        <Banner style={{ width: '100%', height: 'auto', }} />

        <Cases style={{ width: '100%', height: 'auto', }} />

        <Delivery style={{ width: '100%', height: 'auto' }} />

        <Highlight style={{ width: '100%', height: 'auto' }} />

        <Lots style={{ width: '100%', height: 'auto' }} />

        <People style={{ width: '100%', height: 'auto' }} />

        <Products style={{ width: '100%', height: 'auto' }} />

        <WorkWithUs style={{ width: '100%', height: 'auto' }} />

        <section>
          <Sustainability style={{ width: '100%', height: 'auto', }} />
        </section>

        <section>
          <Certifications style={{ width: '100%', height: 'auto', }} />
        </section>

        {/* <Footer style={{ width: '100%', height: 'auto', }} /> */}
      </main>
    </>
  )
}
