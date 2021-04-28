import { ArticleItem } from '../components/ArticleItem';
import Layout from '../components/Layout';

const HomePage = ({ articles }) => {
  return (
    <Layout title='BT News' description='A React test completed by David Bell'>
      <div>
        {articles.map(article => (
          <ArticleItem key={article.url} article={article} />
        ))}
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=gb&apiKey=${process.env.API_KEY}&pageSize=5`
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
