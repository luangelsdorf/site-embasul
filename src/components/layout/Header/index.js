import Button from 'src/components/common/Button';
import styles from './Header.module.scss';
import LogoType from 'public/images/svg/Logo.svg';
import ArrowLong from 'public/images/icons/arrow-long.svg';
import Link from 'next/link';
import { Collapse } from 'src/components/common/Collapse';
import DropdownMenu from './DropdownMenu';
import Highlight from './Highlight';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Caret from 'public/images/icons/caret-down.svg';
import { LayoutContext } from '@/utils/contexts';
import LightGallery from 'lightgallery/react';
import lgVideo from 'lightgallery/plugins/video';

export default function Header({ videoLink }) {

  const router = useRouter();
  const isStaticHeader = (router.pathname === '/empresa' || router.pathname === '/produtos/projetos' || router.pathname === '/contato');

  useEffect(() => {
    function click(e) {
      e.preventDefault();
      document.querySelector('#video').click();
    }

    const meetLink = document.querySelector('#meet');
    meetLink.addEventListener('click', click);

    return () => meetLink.removeEventListener('click', click);
  }, []);

  useEffect(() => {
    if (isStaticHeader) return;
    const header = document.querySelector('#header');
    const onScroll = () => {
      if (window.scrollY > 0) {
        header.classList.add('active');
      } else {
        header.classList.remove('active');
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isStaticHeader]);

  function handleClick(e) {
    if (e.nativeEvent.pointerType === 'touch') e.preventDefault();
    e.currentTarget.parentElement.classList.toggle('show');
  }

  const Navigation = ({ ...props }) => (
    <ul className={styles.links} {...props}>
      <li>
        <Button href="/" link>Início</Button>
      </li>
      <li data-dd-trigger>
        <Button RightIcon={Caret} onClick={handleClick} href="/empresa" link>Empresa</Button>
        <div className={styles.dropdown}>
          <DropdownMenu
            extraLinks={[
              <Highlight
                key="company"
                coverUrl="/images/header/conheca.jpg"
                text={"Conheça a \nEmbasul"}
                href="/empresa/"
                id="meet"
              />,
              <Highlight
                key="structure"
                coverUrl="/images/header/estrutura.jpg"
                text={"Veja nossa \nEstrutura"}
                href="/empresa#estrutura"
              />
            ]}
          >
            <Button link href="/empresa#historia">Nossa História</Button>
            <Button link href="/empresa#norteadores">Norteadores</Button>
            <Button link href="/empresa#estrutura">Estrutura</Button>
          </DropdownMenu>
        </div>
      </li>
      <li data-dd-trigger>
        <Button RightIcon={Caret} onClick={handleClick} link>Produtos</Button>
        <div className={styles.dropdown}>
          <DropdownMenu
            extraLinks={[
              <Highlight
                key="digital"
                coverUrl="/images/header/digital.jpg"
                text={"Impressão \nDigital"}
                href="/produtos/digital"
              />,
              <Highlight
                key="flexo"
                coverUrl="/images/header/flexo.jpg"
                text={"Impressão \nFlexográfica"}
                href="/produtos/flexo"
              />
            ]}
          >
            <Button link href="/produtos/customizadas">Customizadas</Button>
            <Button link href="/produtos/suporte">Suporte Técnico</Button>
            <Button link href="/produtos/design-embalagens">Design de Embalagens</Button>
            <Button link href="/produtos/projetos">Projetos Realizados</Button>
          </DropdownMenu>
        </div>
      </li>
      <li data-dd-trigger>
        <Button RightIcon={Caret} onClick={handleClick} href="/sustentabilidade" link>Sustentabilidade</Button>
        <div className={styles.dropdown}>
          <DropdownMenu>
            <Button link href="/sustentabilidade#fsc">Certificado FSC</Button>
            <Button link href="/sustentabilidade#origem-sustentavel">Selo Origem Sustentável</Button>
            <Button link href="/sustentabilidade#pegada-neutra">Parceria Pegada Neutra</Button>
            <Button link href="/sustentabilidade#cts">Parceria CTS Ambiental</Button>
            <Button link href="/sustentabilidade#politica">Política de Sustentabilidade</Button>
          </DropdownMenu>
        </div>
      </li>
      <li data-dd-trigger>
        <Button RightIcon={Caret} onClick={handleClick} link>Inovação</Button>
        <div className={styles.dropdown}>
          <DropdownMenu>
            <Button link href="/inovacao/design-ai">Design com AI</Button>
            <Button link href="/inovacao/iso9001">Processos ISO 9001</Button>
          </DropdownMenu>
        </div>
      </li>
      <li data-dd-trigger>
        <Button RightIcon={Caret} onClick={handleClick} href="/pessoas" link>Pessoas</Button>
        <div className={styles.dropdown}>
          <DropdownMenu>
            <Button link href="/pessoas#pessoas">Pessoas</Button>
            <Button link href="/pessoas#codigo-etica">Código de Ética</Button>
            <Button link href="/pessoas#canal-etica">Canal de Ética</Button>
            <Button link href="/pessoas#trabalhe-conosco">Trabalhe Conosco</Button>
          </DropdownMenu>
        </div>
      </li>
      <li className="d-inline-flex d-lg-none">
        <Button onClick={handleClick} href="/contato" RightIcon={ArrowLong}>Faça uma Cotação</Button>
      </li>
    </ul>
  );

  return (
    <header id="header" className={`${styles.header}${isStaticHeader ? ' active' : ''}`}>
      <LightGallery download={false} mode="lg-fade" plugins={[lgVideo]}>
        <button id="video" data-src={videoLink} style={{ display: 'none' }} />
      </LightGallery>

      <div className="container">
        <Link href="/" className={styles.logo}>
          <LogoType />
        </Link>

        <Navigation data-desktop />

        <Button href="/contato" className="small d-none d-lg-inline-flex" RightIcon={ArrowLong}>Faça uma Cotação</Button>
        <Collapse className="d-block d-lg-none">
          <Collapse.Title>
            <Button onClick={e => e.currentTarget.classList.toggle(styles.active)} btnElement title="Menu">
              {/* <Hamburger /> */}
              {/* <X /> */}
              <div style={{ fontFamily: 'monospace' }}>+</div>
              <div style={{ fontFamily: 'monospace' }}>❌</div>
            </Button>
          </Collapse.Title>
          <Collapse.Content>
            <Navigation />
          </Collapse.Content>
        </Collapse>
      </div>
    </header>
  )
}