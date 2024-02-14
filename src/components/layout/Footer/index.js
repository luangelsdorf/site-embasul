import { useContext } from 'react';
import styles from './Footer.module.scss';
import { LayoutContext } from '@/utils/contexts';
import Mail from 'public/images/icons/mail.svg';
import Phone from 'public/images/icons/phone.svg';
import Arrow from 'public/images/icons/arrow-short.svg';
import DiagonalArrow from 'public/images/icons/arrow-diagonal.svg';
import Abarca from 'public/images/icons/abarca.svg';
import Button from '@/components/common/Button';
import Link from 'next/link';
import Img from '@/components/common/Img';
import Reveal from 'react-awesome-reveal';
import { slideUp } from '@/utils/animation';

export default function Footer() {
  const content = useContext(LayoutContext);
  const lastLink = content.footer.usefulLinks.at(-1);
  const split = lastLink.text.split(' ');
  split.splice(2, 0, '\n');
  const lastLinkText = split.join(' ');

  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <Reveal triggerOnce keyframes={slideUp} duration={500} fraction={0.5}>
                <div className={styles.cta}>
                  <h2 className="text-300 no-period">{content.footer.title}</h2>
                  <p>{content.footer.text}</p>
                  <div className={styles.contactButton} onClick={e => e.currentTarget.querySelector('a').click()}>
                    <div>
                      <Mail />
                    </div>
                    <div>
                      <span>Preencha nosso</span>
                      <Button link RightIcon={Arrow} href="/contato?persist=true" as="/contato">Formulário de Contato</Button>
                    </div>
                  </div>
                  <div className={styles.contactButton} onClick={e => e.currentTarget.querySelector('a').click()}>
                    <div>
                      <Phone />
                    </div>
                    <div>
                      <span>Ligue para</span>
                      <Button link RightIcon={Arrow} href={`tel:${content.footer.phone.replaceAll(' ', '')}`}>{content.footer.phone}</Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="col-lg-1" />
            <div className={`col-lg-1 ${styles.divider}`} />

            <div className="col-12 col-lg-3">
              <Reveal triggerOnce keyframes={slideUp} duration={500} fraction={0.5} delay={400}>
                <div className={styles.getInTouch}>
                  <h2 className="text-300 no-period">Nossas Redes</h2>
                  <ul>
                    {
                      content.footer.socials.map(link => (
                        <li key={link.id}>
                          <Button href={link.url} link>
                            <Img style={{ marginRight: '12px' }} {...link.icon} />
                            {link.title}
                          </Button>
                        </li>
                      ))
                    }
                  </ul>
                  <h2 className="text-300 no-period">Nos Visite</h2>
                  <p>{content.footer.address}</p>
                </div>
              </Reveal>
            </div>
            <div className="col-12 col-lg-3">
              <Reveal triggerOnce keyframes={slideUp} duration={500} fraction={0.5} delay={600}>
                <div className={styles.usefulLinks}>
                  <h2 className="text-300 no-period">Links Úteis</h2>
                  <ul>
                    {
                      content.footer.usefulLinks.slice(0, -1).map(link => (
                        <li key={link.id}>
                          <Button href={link.url} link>{link.text}</Button>
                        </li>
                      ))
                    }
                  </ul>
                  <Button link href={lastLink.url} RightIcon={DiagonalArrow}>{lastLinkText.split(' \n ').join('\n')}</Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <div className="container">
          <div className={styles.copyInner}>
            <Link href="/politica-de-privacidade">Política de Privacidade</Link>
            <p>Todos os Direitos Reservados <span>©</span> 2024</p>
            <a href="https://abarca.net.br" target="_blank">
              <Abarca />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
