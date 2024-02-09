import Title from '@/components/common/Title';
import styles from './Portfolio.module.scss';
import Button from '@/components/common/Button';
import Slider from 'react-slick';
import ProjectCard from '@/components/portfolio/ProjectCard';
import { useRef } from 'react';
import Arrow from 'public/images/icons/arrow-short.svg';

export default function Portfolio({ content, projects }) {
  let sliderRef = useRef(null);
  const next = e => {
    e.preventDefault();
    sliderRef.slickNext();
  };
  const previous = e => {
    e.preventDefault();
    sliderRef.slickPrev();
  };

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row align-items-end justify-content-center justify-content-lg-between">
          <div className="col-12 col-lg-4">
            <Title content={content.headline} />
          </div>
          <div className="col-auto d-flex align-items-center">
            <Button className="btn-secondary d-none d-lg-inline-flex" href="/produtos/projetos" style={{ marginRight: '32px' }}>Navegue por Todos os Projetos</Button>
            <div className={styles.controls}>
              <Button link onClick={previous} className="wrapper btn-circle-secondary testimonial-arrow">
                <Arrow />
              </Button>
              <Button link onClick={next} className="wrapper btn-circle-primary black testimonial-arrow">
                <Arrow />
              </Button>
            </div>
          </div>
        </div>
        <div className="row">
          <Slider
            ref={slider => { sliderRef = slider; }}
            autoplay={true}
            slidesToShow={3}
            arrows={false}
            responsive={[{ breakpoint: 992, settings: { slidesToShow: 1 } }]}
          >
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
      <Button style={{ margin: '0 24px', width: 'auto' }} className="btn-secondary d-inline-flex d-lg-none" href="/produtos/projetos">Navegue por Todos os Projetos</Button>
    </div>
  )
}
