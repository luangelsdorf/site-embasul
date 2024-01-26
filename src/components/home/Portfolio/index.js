import Title from '@/components/common/Title';
import styles from './Portfolio.module.scss';
import Button from '@/components/common/Button';
import Slider from 'react-slick';
import ProjectCard from '@/components/portfolio/ProjectCard';

export default function Portfolio({ content, projects }) {

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
          <Slider slidesToShow={3} arrows={false}>
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
