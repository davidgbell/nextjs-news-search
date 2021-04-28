import Link from 'next/link';

import styles from '../styles/Intro.module.css';
import { ArticleItem } from '../components/ArticleItem';
import Layout from '../components/Layout';

const HomePage = ({ articles }) => {
  return (
    <Layout title='BT News' description='A React test completed by David Bell'>
      <div className={styles.intro}>
        <h1>BT React Code Test - by David Bell</h1>
        <p>28/04/2021</p>
      </div>

      <h2>Featured Articles</h2>
      <div className='featured'>
        {articles.map(article => (
          <ArticleItem key={article.url} article={article} />
        ))}
        {articles.length > 0 && (
          <Link href='/top'>
            <a className='btn'>Read more</a>
          </Link>
        )}
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=gb&apiKey=${process.env.API_KEY}&pageSize=3`
  );

  const stories = await res.json();

  const articles = stories.articles;

  return {
    props: {
      articles,
    },
  };
};

export default HomePage;
