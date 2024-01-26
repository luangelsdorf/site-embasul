import Button from '@/components/common/Button';
import styles from './Filter.module.scss';
import { useState } from 'react';
import ProjectCard from '../ProjectCard';

export default function Filter({ content, categories, portfolio }) {

  const chunkSize = 4;
  const splitCategories = [];
  for (let i = 0; i < categories.length; i += chunkSize) {
    splitCategories.push(categories.slice(i, i + (i === 0 ? chunkSize - 1 : chunkSize)));
  }

  const [list, setList] = useState(portfolio);

  function handleClick(e) {
    let { value } = e.currentTarget.dataset;

    if (value === 'all') {
      setList(portfolio);
      return;
    }

    e.currentTarget.parentElement.childNodes.forEach(el => el.classList.remove('active'));
    e.currentTarget.classList.add('active');
    let newList = portfolio.filter(item => item.attributes.categories.data.some(cat => cat.attributes.slug === value));
    console.log(newList);
    setList(newList);
  }

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <header>
              <p className="overline">{content.headline.overline}</p>
              <h1 className="display-1">{content.headline.title}</h1>
            </header>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <div className={styles.filter}>
              {
                splitCategories.map((row, i) => (
                  <div key={i}>
                    {i === 0 &&
                      <>
                        <Button btnElement onClick={handleClick} data-value={'all'}>Todos</Button>
                        <span className={styles.separator} />
                      </>
                    }
                    {
                      row.map((cat, catI) => (
                        <>
                          <Button key={cat.id} btnElement onClick={handleClick} data-value={cat.attributes.slug}>{cat.attributes.name}</Button>
                          {(catI !== 3 && catI !== row.length - 1) && <span className={styles.separator} />}
                        </>
                      ))
                    }
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <div className="row">
          {
            list.length > 0 ? (
              list.map(card => (
                <div className="col-12 col-lg-4 gy-4" key={card.id}>
                  <ProjectCard {...card.attributes} />
                </div>
              ))
            ) : (
              <p className={styles.notFound}>Nenhum projeto encontrado.</p>
            )
          }
        </div>
      </div>
    </div>
  )
}
