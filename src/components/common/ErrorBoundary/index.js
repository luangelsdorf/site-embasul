import React from 'react';
import { t } from '@/utils/translations';

// Captura erros de renderização (ex.: campo do CMS nulo/ausente após edição)
// e exibe um fallback amigável, mantendo header/footer e a navegação ativos —
// em vez de quebrar a página inteira (tela branca / 500).
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('[ErrorBoundary]', error, errorInfo);
  }

  componentDidUpdate(prevProps) {
    // Ao navegar para outra rota, limpa o estado de erro para não "prender"
    // o usuário na tela de falha de uma página específica.
    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
      this.setState({ hasError: false });
    }
  }

  render() {
    if (this.state.hasError) {
      const { locale } = this.props;
      return (
        <main
          style={{
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '96px 24px',
            gap: '16px',
          }}
        >
          <h1 className="display-2 no-period" style={{ margin: 0 }}>{t('error.generic.title', locale)}</h1>
          <p style={{ maxWidth: 480, margin: 0, color: 'var(--neutral--700)' }}>{t('error.generic.text', locale)}</p>
          <button
            className="btn-primary"
            style={{ cursor: 'pointer', marginTop: 8 }}
            onClick={() => { if (typeof window !== 'undefined') window.location.reload(); }}
          >
            {t('error.reload', locale)}
          </button>
        </main>
      );
    }

    return this.props.children;
  }
}
