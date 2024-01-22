import { useContext } from 'react';
import styles from './Footer.module.scss';
import { LayoutContext } from '@/utils/contexts';
import Instagram from 'public/images/icons/instagram.svg';
import Facebook from 'public/images/icons/facebook.svg';
import LinkedIn from 'public/images/icons/linkedin.svg';
import Mail from 'public/images/icons/mail.svg';
import Phone from 'public/images/icons/phone.svg';
import Arrow from 'public/images/icons/arrow-short.svg';
import DiagonalArrow from 'public/images/icons/arrow-diagonal.svg';
import Abarca from 'public/images/icons/abarca.svg';
import Button from '@/components/common/Button';
import Link from 'next/link';

export default function Footer() {
  const content = useContext(LayoutContext);
  console.log(content);

  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className={styles.cta}>
                <h2 className="text-300">{content.footer.title}</h2>
                <p>{content.footer.text}</p>
                <div className={styles.contactButton}>
                  <div>
                    <Mail />
                  </div>
                  <div>
                    <span>Preencha nosso</span>
                    <Button link RightIcon={Arrow} href="/contato">Formulário de Contato</Button>
                  </div>
                </div>
                <div className={styles.contactButton}>
                  <div>
                    <Phone />
                  </div>
                  <div>
                    <span>Ligue para</span>
                    <Button link RightIcon={Arrow} href={`tel:${content.info.phone.replaceAll(' ', '')}`}>{content.info.phone}</Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-1" />
            <div className="col-lg-1" />

            <div className="col-12 col-lg-3">
              <div className={styles.getInTouch}>
                <h2 className="text-300">Nossas Redes</h2>
                <ul>
                  <li><Button LeftIcon={Instagram} link>Instagram</Button></li>
                  <li><Button LeftIcon={Facebook} link>Facebook</Button></li>
                  <li><Button LeftIcon={LinkedIn} link>LinkedIn</Button></li>
                </ul>
                <h2 className="text-300">Nos Visite</h2>
                <p>{content.info.address}</p>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className={styles.usefulLinks}>
                <h2 className="text-300">Links Úteis</h2>
                <ul>
                  <li><Button link href="#">Solicite Orçamento</Button></li>
                  <li><Button link href="#">Canal de Ética</Button></li>
                  <li><Button link href="#">Política de Sustentabilidade</Button></li>
                  <li><Button link href="#">Política de Conduta</Button></li>
                </ul>
                <Button link href="#" RightIcon={DiagonalArrow}>Venha Trabalhar <br />Conosco</Button>
              </div>
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
