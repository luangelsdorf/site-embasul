import Title from '@/components/common/Title';
import styles from './Certificates.module.scss';
import Img from '@/components/common/Img';
import { toFormatted } from '@/utils/helpers';
import Link from 'next/link';
import Reveal from 'react-awesome-reveal';
import { slideUp } from '@/utils/animation';

export default function Certificates({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row align-items-end">
          <div className="col-12 col-lg-6">
            <Reveal triggerOnce keyframes={slideUp} duration={500} fraction={0.5}>
              <Title content={content.headline} />
            </Reveal>
          </div>
          <div className="col-12 col-lg-5 offset-lg-1">
            <Reveal triggerOnce keyframes={slideUp} duration={500} fraction={0.5} delay={300}>
              <p>{toFormatted(content.text)}</p>
            </Reveal>
          </div>
        </div>
        <div className="row">
          <Reveal triggerOnce keyframes={slideUp} duration={500} fraction={0.5} cascade damping={0.3} className="col-12 col-lg-4" >
            {
              content.certificates.map(cert => (
                <div key={cert.id}>
                  <Link href={cert.link} className="wrapper">
                    <Img {...cert.image} sizes={'(max-width: 992px) 80vw, (max-width: 1400px) 33vw, 25vw'} />
                  </Link>
                </div>
              ))
            }
          </Reveal>
        </div>
      </div>
    </div>
  )
}
