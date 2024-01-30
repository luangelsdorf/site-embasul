import Title from '@/components/common/Title';
import styles from './Portfolio.module.scss';
import Button from '@/components/common/Button';
import Slider from 'react-slick';
import ProjectCard from '@/components/portfolio/ProjectCard';

export default function Portfolio({ content, projects }) {

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row align-items-end justify-content-center justify-content-lg-between">
          <div className="col-12 col-lg-4">
            <Title content={content.headline} />
          </div>
          <div className="col-auto">
            <Button className="btn-secondary" href="/produtos/projetos">Navegue por Todos os Projetos</Button>
          </div>
        </div>
        <div className="row">
          <Slider autoplay={true} slidesToShow={3} arrows={false} responsive={[{ breakpoint: 992, settings: { slidesToShow: 1 } }]}>
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
