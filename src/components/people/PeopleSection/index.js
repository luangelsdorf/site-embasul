import PictureAndText from '@/components/common/PictureAndText';
import styles from './PeopleSection.module.scss';
import Img from '@/components/common/Img';
import Title from '@/components/common/Title';
import Develop from 'public/images/icons/develop.svg';
import Practices from 'public/images/icons/practices.svg';
import Collaborate from 'public/images/icons/collaborate.svg';
import Button from '@/components/common/Button';
import Arrow from 'public/images/icons/arrow-short.svg';
import { toFormatted } from '@/utils/helpers';
import Reveal from 'react-awesome-reveal';
import { slideUp } from '@/utils/animation';

export default function PeopleSection({ content }) {

  const icons = [
    <Develop key={1} />,
    <Practices key={2} />,
    <Collaborate key={3} />,
  ]

  function handleClick(e) {
    e.preventDefault();
    e.currentTarget.parentElement.classList.toggle(styles.active);
    document.querySelector(`.${styles.active} a`)?.textContent.replace('Mais', 'Menos');
  }
  
  return (
    <div className={styles.section}>
      <div className={styles.details}>
        <PictureAndText flipped contained>
          <Img {...content.details.icon} />
          <div className={styles.detailsContent}>
            <Title content={{ title: content.details.title, overline: content.details.subtitle }} />
            <p>{toFormatted(content.details.text)}</p>
          </div>
        </PictureAndText>
      </div>

      <div className={styles.highlights}>
        <div className="container">
          <div className="row">
            <Reveal triggerOnce keyframes={slideUp} duration={500} fraction={0.5} cascade damping={0.3} className="col-12 col-lg-4">
              {
                content.items.map((item, i) => (
                  <div key={item.id}>
                    <article>
                      {icons[i]}
                      <h2 className="heading-h3-size">{item.title}</h2>
                      <p>{item.text}</p>
                      <Button onClick={handleClick} RightIcon={Arrow} className="link-wrapper" href={item.linkUrl} link />
                    </article>
                  </div>
                ))
              }
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  )
}
