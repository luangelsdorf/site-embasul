import styles from './Collapse.module.scss';

const Title = ({ children, details, className, ...other }) => {
  if (details) {
    return <summary {...other}>{children}</summary>
  }
  else {
    return <div className={`${className ? className + ' ' : ''}${styles.collapse}`} onClick={handleClick} {...other}>{children}</div>
  }
}

const Content = ({ children, ...props }) => {
  return (
    <div className="content" {...props}>{children}</div>
  )
}

export function Collapse({ children, className, details = false, open = false, ...other }) {

  const titleChildren = children.find(({ type }) => type.toString() === Title.toString()).props.children;
  const contentChildren = children.find(({ type }) => type.toString() === Content.toString()).props.children;

  if (details) {
    return (
      <details open={open} className={`${className ? className + ' ' : ''}${styles.collapse}`} onClick={handleClick} {...other}>
        <Title details={details}>{titleChildren}</Title>
        <Content>{contentChildren}</Content>
      </details>
    )
  }

  else {
    return (
      <>
        <Title data-collapse-trigger details={details} className={className}>{titleChildren}</Title>
        <Content data-open={open}>{contentChildren}</Content>
      </>
    )
  }
}

function handleClick(e) {
  e.preventDefault();
  let details = e.currentTarget;
  let detailsContent = details.querySelector('.content') ?? details.nextElementSibling;

  if (details.open) {
    detailsContent.animate(
      {
        height: [`${detailsContent.scrollHeight}px`, 0],
      },
      {
        duration: 400,
        easing: 'ease',
      }
    ).finished.then(() => {
      details.open = false;
      detailsContent.dataset.open = false;
    });
  }

  else {
    details.open = true;
    detailsContent.dataset.open = true;
    detailsContent.animate(
      {
        height: [0, `${detailsContent.scrollHeight}px`],
      },
      {
        duration: 400,
        easing: 'ease',
      }
    );
  }
}

Collapse.Title = Title;
Collapse.Content = Content;