import Button from 'src/components/common/Button';
import styles from './Header.module.scss';
import LogoType from 'public/images/svg/Logo.svg';
import ArrowLong from 'public/images/icons/arrow-long.svg';
import Link from 'next/link';
import { Collapse } from 'src/components/common/Collapse';
import DropdownMenu from './DropdownMenu';
import Highlight from './Highlight';
import { useEffect } from 'react';

export default function Header() {

  useEffect(() => {
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
  }, []);

  const Navigation = ({ ...props }) => (
    <ul className={styles.links} {...props}>
      <li data-dd-trigger>
        <div className={styles.dropdown}>
          <DropdownMenu
            extraLinks={[
              <Highlight
                coverUrl="/images/header/conheca.jpg"
                text={"Conheça a \nEmbasul"}
                href="/empresa/"
              />,
              <Highlight
                coverUrl="/images/header/estrutura.jpg"
                text={"Veja nossa \nEstrutura"}
                href="/produtos#estrutura"
              />
            ]}
          >
            <Button link href="/empresa#historia">Nossa História</Button>
            <Button link href="/empresa#norteadores">Norteadores</Button>
            <Button link href="/empresa#estrutura">Estrutura</Button>
          </DropdownMenu>
        </div>
        <Button href="/empresa" link>Empresa</Button>
      </li>
      <li data-dd-trigger>
        <div className={styles.dropdown}>
          <DropdownMenu
            extraLinks={[
              <Highlight
                coverUrl="/images/header/digital.jpg"
                text={"Impressão \nDigital"}
                href="/produtos/digital"
              />,
              <Highlight
                coverUrl="/images/header/flexo.jpg"
                text={"Impressão \nFlexográfica"}
                href="/produtos/flexo"
              />
            ]}
          >
            <Button link href="/produtos/customizadas">Customizadas</Button>
            <Button link href="/produtos/suporte">Suporte Técnico</Button>
            <Button link href="/produtos/design-embalagens">Design de Embalagens</Button>
            <Button link href="/produtos/portfolio">Projetos Realizados</Button>
          </DropdownMenu>
        </div>
        <Button onClick={e => e.preventDefault()} link>Produtos</Button>
      </li>
      <li data-dd-trigger>
        <div className={styles.dropdown}>
          <DropdownMenu>
            <Button link href="/sustentabilidade#fsc">Certificado FSC</Button>
            <Button link href="/sustentabilidade#origem-sustentavel">Selo Origem Sustentável</Button>
            <Button link href="/sustentabilidade#pegada-neutra">Parceria Pegada Neutra</Button>
            <Button link href="/sustentabilidade#cts">Parceria CTS Ambiental</Button>
            <Button link href="/sustentabilidade#politica">Política de Sustentabilidade</Button>
          </DropdownMenu>
        </div>
        <Button href="/sustentabilidade" link>Sustentabilidade</Button>
      </li>
      <li data-dd-trigger>
        <div className={styles.dropdown}>
          <DropdownMenu>
            <Button link href="/inovacao/design-ai">Design com AI</Button>
            <Button link href="/inovacao/iso9001">Processos ISO 9001</Button>
          </DropdownMenu>
        </div>
        <Button href="/inovacao" link>Inovação</Button>
      </li>
      <li data-dd-trigger>
        <div className={styles.dropdown}>
          <DropdownMenu>
            <Button link href="/pessoas#pessoas">Pessoas</Button>
            <Button link href="/pessoas#codigo-etica">Código de Ética</Button>
            <Button link href="/pessoas#canal-etica">Canal de Ética</Button>
            <Button link href="/pessoas#trabalhe-conosco">Trabalhe Conosco</Button>
          </DropdownMenu>
        </div>
        <Button href="/pessoas" link>Pessoas</Button>
      </li>
      <li className="d-inline-flex d-lg-none">
        <Button href="/contato" RightIcon={ArrowLong}>Faça uma Cotação</Button>
      </li>
    </ul>
  );

  return (
    <header id="header" className={`${styles.header}`}>
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