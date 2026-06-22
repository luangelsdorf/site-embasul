import Button from 'src/components/common/Button';
import styles from './Header.module.scss';
import LogoType from 'public/images/svg/Logo.svg';
import ArrowLong from 'public/images/icons/arrow-long.svg';
import Link from 'next/link';
import { Collapse } from 'src/components/common/Collapse';
import DropdownMenu from './DropdownMenu';
import Highlight from './Highlight';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Caret from 'public/images/icons/caret-down.svg';
import X from 'public/images/icons/x.svg';
import Box from 'public/images/icons/digital-printing.svg';
import Bars from 'public/images/icons/bars.svg';
import { LayoutContext } from '@/utils/contexts';
import { t } from '@/utils/translations';
import LanguageSwitcher from '@/components/layout/LanguageSwitcher';

export default function Header() {
  const { header } = useContext(LayoutContext);
  const router = useRouter();
  const [isStaticHeader, setIsStaticHeader] = useState(false);
  const locale = router.locale;

  useEffect(() => {
    setIsStaticHeader(router.pathname === '/empresa' || router.pathname === '/produtos/projetos' || router.pathname === '/trabalhe-conosco' || router.pathname === '/404' || router.pathname === '/500' || router.pathname === '/blog/[slug]');
  }, [router.pathname]);

  useEffect(() => {
    let onScroll;
    if (isStaticHeader) {
      if (onScroll) window.removeEventListener('scroll', onScroll);
      return;
    }

    const header = document.querySelector('#header');
    onScroll = () => {
      if (window.scrollY > 0) {
        header.classList.add('active');
      } else {
        header.classList.remove('active');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      if (onScroll) window.removeEventListener('scroll', onScroll);
    }
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
        <Button href="/" link>{t('nav.home', locale)}</Button>
      </li>
      <li data-dd-trigger>
        <Button RightIcon={Caret} onClick={handleClick} href="/empresa" link>{t('nav.company', locale)}</Button>
        <div className={styles.dropdown}>
          <DropdownMenu extraLinks={header?.company?.map(item => <Highlight key={item.id} {...item} />)}>
            <Button link href="/empresa#Primeira Planta">{t('company.structure', locale)}</Button>
            <Button link href="/empresa#historia">{t('company.history', locale)}</Button>
            <Button link href="/empresa#norteadores">{t('company.principles', locale)}</Button>
          </DropdownMenu>
        </div>
      </li>
      <li data-dd-trigger>
        <Button RightIcon={Caret} onClick={handleClick} href="/produtos" link>{t('nav.products', locale)}</Button>
        <div className={styles.dropdown}>
          <DropdownMenu extraLinks={header?.products?.map(item => <Highlight key={item.id} {...item} />)}>
            <Button link href="/produtos#digital">{t('products.digital', locale)}</Button>
            <Button link href="/produtos#flexo">{t('products.flexo', locale)}</Button>
            <Button link href="/produtos#customizadas">{t('products.custom', locale)}</Button>
            <Button link href="/produtos#suporte">{t('products.support', locale)}</Button>
            <Button link href="/produtos#design-embalagens">{t('products.packaging', locale)}</Button>
            <Button link href="/produtos/projetos">{t('products.projects', locale)}</Button>
          </DropdownMenu>
        </div>
      </li>
      <li data-dd-trigger>
        <Button RightIcon={Caret} onClick={handleClick} href="/sustentabilidade" link>{t('nav.sustainability', locale)}</Button>
        <div className={styles.dropdown}>
          <DropdownMenu extraLinks={header?.sustain?.map(item => <Highlight key={item.id} {...item} />)}>
            <Button link href="/sustentabilidade#fsc">{t('sustain.fsc', locale)}</Button>
            <Button link href="/sustentabilidade#origem-sustentavel">{t('sustain.origin', locale)}</Button>
            <Button link href="/sustentabilidade#pegada-neutra">{t('sustain.neutral', locale)}</Button>
            <Button link href="/sustentabilidade#cts">{t('sustain.cts', locale)}</Button>
            <Button link href="/sustentabilidade#politica">{t('sustain.policy', locale)}</Button>
          </DropdownMenu>
        </div>
      </li>
      <li data-dd-trigger>
        <Button RightIcon={Caret} onClick={handleClick} href="/inovacao" link>{t('nav.innovation', locale)}</Button>
        <div className={styles.dropdown}>
          <DropdownMenu extraLinks={header?.innovation?.map(item => <Highlight key={item.id} {...item} />)}>
            <Button link href="/inovacao#design-ai">{t('innovation.ai', locale)}</Button>
            <Button link href="/inovacao#iso9001">{t('innovation.iso', locale)}</Button>
          </DropdownMenu>
        </div>
      </li>
      <li data-dd-trigger>
        <Button RightIcon={Caret} onClick={handleClick} href="/pessoas" link>{t('nav.people', locale)}</Button>
        <div className={styles.dropdown}>
          <DropdownMenu extraLinks={header?.people?.map(item => <Highlight key={item.id} {...item} />)}>
            <Button link href="/pessoas#pessoas">{t('people.people', locale)}</Button>
            <Button link href="/pessoas#codigo-etica">{t('people.ethics', locale)}</Button>
            <Button link href="/pessoas#canal-etica">{t('people.channel', locale)}</Button>
            <Button link href="/pessoas#trabalhe-conosco">{t('people.careers', locale)}</Button>
          </DropdownMenu>
        </div>
      </li>
      <li className="d-inline-flex d-lg-none">
        <Button href="/trabalhe-conosco" RightIcon={ArrowLong}>{t('nav.workWithUs', locale)}</Button>
      </li>
      <li className={`d-block d-lg-none ${styles.mobileLang}`}>
        <LanguageSwitcher expanded />
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

        <Button href="/trabalhe-conosco" className="small d-none d-lg-inline-flex text-nowrap flex-shrink-0" RightIcon={ArrowLong}>{t('nav.workWithUs', locale)}</Button>
        
        <div className="d-none d-lg-flex flex-shrink-0">
          <LanguageSwitcher />
        </div>

        <Button href="/trabalhe-conosco" className="small d-inline-flex d-lg-none btn-circle-primary">
          <Box width="24" height="24" />
        </Button>

        <Collapse className="d-block d-lg-none">
          <Collapse.Title>
            <Button onClick={e => e.currentTarget.classList.toggle(styles.active)} btnElement title={t('nav.menu', locale)}>
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