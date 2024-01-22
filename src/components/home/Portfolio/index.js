import Title from '@/components/common/Title';
import styles from './Portfolio.module.scss';
import Button from '@/components/common/Button';
import Img from '@/components/common/Img';
import { getSizesString } from '@/utils/images';
import Link from 'next/link';
import Slider from 'react-slick';

export default function Portfolio({ content, projects }) {

  const ProjectCard = ({ cover, title, slug, categories }) => {
    return (
      <section className="wrapper" href={`/projetos/${slug}`} style={{ margin: '0px 12px' }}>
        <article>
          <Img fill sizes={getSizesString('col-12 col-md-4')} {...cover} />
          <div>
            <span>{categories?.data.length > 0 && categories.data[0].attributes.name}</span>
            <span className="heading-h3-size">{title}</span>
          </div>
        </article>
      </section>
    );
  }

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row align-items-end justify-content-between">
          <div className="col-12 col-lg-4">
            <Title content={content.headline} />
          </div>
          <div className="col-auto">
            <Button className="btn-secondary" href="">Navegue por Todos os Projetos</Button>
          </div>
        </div>
        <div className="row">
          <Slider slidesToShow={3}>
            {
              projects.map(project => (
                <div key={project.id} className="col-12 col-lg-4">
                  <ProjectCard {...project.attributes} />
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}
