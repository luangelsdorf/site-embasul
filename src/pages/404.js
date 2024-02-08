import Button from '@/components/common/Button';
import { getLayoutContent } from '@/utils/fetch';
import { useEffect } from 'react';

export default function NotFound() {

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
        <p className="overline">404</p>
        <h1>Esta página não pôde ser encontrada</h1>
      </div>
      <h4>Clique no botão abaixo para voltar à página inicial:</h4>
      <Button href="/">Página Inicial</Button>
    </div>
  )
}

export async function getStaticProps() {
  const layout = await getLayoutContent();

  return {
    props: { layout }
  }
}