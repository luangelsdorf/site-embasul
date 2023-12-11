import Head from "next/head";
import Image from "next/image";
import Projects from 'public/images/gambi/products/projects/page.svg';

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Projetos | Embasul</title>
      </Head>

      <Projects id="projects" style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} />
    </div>
  )
}
