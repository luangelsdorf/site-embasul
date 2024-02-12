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
import X from 'public/images/icons/x.svg';
import Box from 'public/images/icons/digital-printing.svg';
import Bars from 'public/images/icons/bars.svg';
import { LayoutContext } from '@/utils/contexts';

export default function Header() {
  const { header } = useContext(LayoutContext);
  const router = useRouter();
  const isStaticHeader = (router.pathname === '/empresa' || router.pathname === '/produtos/projetos' || router.pathname === '/contato' || router.pathname === '/404' || router.pathname === '/500');

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
    if (e.nativeEvent.pointerType === 'touch') {
      e.preventDefault();
      e.currentTarget.parentElement.classList.toggle('show');
    }
  }

  const Navigation = ({ ...props }) => (
    <ul className={styles.links} {...props}>
      <li>
        <Button href="/" link>Início</Button>
      </li>
      <li data-dd-trigger>
        <Button RightIcon={Caret} onClick={handleClick} href="/empresa" link>Empresa</Button>
        <div className={styles.dropdown}>
          <DropdownMenu extraLinks={header.company.map(item => <Highlight key={item.id} {...item} />)}>
            <Button link href="/empresa#historia">Nossa História</Button>
            <Button link href="/empresa#norteadores">Norteadores</Button>
            <Button link href="/empresa#Primeira Planta">Estrutura</Button>
          </DropdownMenu>
        </div>
      </li>
      <li data-dd-trigger>
        <Button RightIcon={Caret} onClick={handleClick} href="/produtos/projetos" link>Produtos</Button>
        <div className={styles.dropdown}>
          <DropdownMenu extraLinks={header.products.map(item => <Highlight key={item.id} {...item} />)}>
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
          <DropdownMenu extraLinks={header.sustain.map(item => <Highlight key={item.id} {...item} />)}>
            <Button link href="/sustentabilidade#fsc">Certificado FSC</Button>
            <Button link href="/sustentabilidade#origem-sustentavel">Selo Origem Sustentável</Button>
            <Button link href="/sustentabilidade#pegada-neutra">Parceria Pegada Neutra</Button>
            <Button link href="/sustentabilidade#cts">Parceria CTS Ambiental</Button>
            <Button link href="/sustentabilidade#politica">Política de Sustentabilidade</Button>
          </DropdownMenu>
        </div>
      </li>
      <li data-dd-trigger>
        <Button RightIcon={Caret} onClick={handleClick} href="/inovacao/design-ai" link>Inovação</Button>
        <div className={styles.dropdown}>
          <DropdownMenu extraLinks={header.innovation.map(item => <Highlight key={item.id} {...item} />)}>
            <Button link href="/inovacao/design-ai">Design com AI</Button>
            <Button link href="/inovacao/iso9001">Processos ISO 9001</Button>
          </DropdownMenu>
        </div>
      </li>
      <li data-dd-trigger>
        <Button RightIcon={Caret} onClick={handleClick} href="/pessoas" link>Pessoas</Button>
        <div className={styles.dropdown}>
          <DropdownMenu extraLinks={header.people.map(item => <Highlight key={item.id} {...item} />)}>
            <Button link href="/pessoas#pessoas">Pessoas</Button>
            <Button link href="/pessoas#codigo-etica">Código de Ética</Button>
            <Button link href="/pessoas#canal-etica">Canal de Ética</Button>
            <Button link href="/pessoas#trabalhe-conosco">Trabalhe Conosco</Button>
          </DropdownMenu>
        </div>
      </li>
      <li className="d-inline-flex d-lg-none">
        <Button href="/contato" RightIcon={ArrowLong}>Faça uma Cotação</Button>
      </li>
    </ul>
  );

  return (
    <header id="header" className={`${styles.header}${isStaticHeader ? ' active' : ''}`}>

      <div className="container">
        <Link href="/" className={styles.logo}>
          <LogoType />
        </Link>

        <Navigation data-desktop />

        <Button href="/contato" className="small d-none d-lg-inline-flex" RightIcon={ArrowLong}>Faça uma Cotação</Button>
        <Button href="/contato" className="small d-inline-flex d-lg-none btn-circle-primary">
          <Box width="24" height="24" />
        </Button>

        <Collapse className="d-block d-lg-none">
          <Collapse.Title>
            <Button onClick={e => e.currentTarget.classList.toggle(styles.active)} btnElement title="Menu">
              <div>
                <Bars />
              </div>
              <div>
                <X />
              </div>
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