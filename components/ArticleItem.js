import styles from '../styles/ArticleItem.module.css';

export const ArticleItem = ({ article }) => {
  return (
    <div className={styles.articleItem}>
      <h3>{article.title}</h3>
      <p className={styles.author}>
        <span>Author:</span> {article.author}
      </p>
      {article.content && <p>{article?.content?.slice(0, 150)}</p>}
      <div className={styles.links}>
        <p>
          <a className='btn' href={article.url}>
            Read full article
          </a>
        </p>
        {article.urlToImage && (
          <p>
            <a className='btn' href={article.urlToImage}>
              Article image
            </a>{' '}
          </p>
        )}
      </div>
    </div>
  );
};
