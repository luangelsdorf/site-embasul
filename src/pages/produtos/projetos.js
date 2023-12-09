import Head from "next/head";
import Image from "next/image";
import projects from 'public/images/gambi/products/projects/page.png';

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Projetos | Embasul</title>
      </Head>

      <Image id="projects" style={{ width: '100%', height: 'auto', objectPosition: 'top', objectFit: 'cover' }} src={projects} />
    </div>
  )
}
