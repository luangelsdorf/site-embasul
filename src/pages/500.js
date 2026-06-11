import Button from '@/components/common/Button';
import { getLayoutContent } from '@/utils/fetch';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { t } from '@/utils/translations';

export default function NotFound() {
  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    document.querySelector('header').classList.add('active');
  }, []);

  return (
    <div style={{
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: '36px',
      alignItems: 'center',
      justifyContent: 'center',
      height: '90vh',
    }}>
      <div>
        <p className="overline">500</p>
        <h1>{t('error.500.title', locale)}</h1>
      </div>
      <h4>{t('error.back', locale)}</h4>
      <Button href="/">{t('error.home', locale)}</Button>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  const layout = await getLayoutContent(locale);

  return {
    props: { layout }
  }
}