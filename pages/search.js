import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { ArticleItem } from '../components/ArticleItem';
import Layout from '../components/Layout';

const SearchPage = ({ articles }) => {
  const router = useRouter();

  return (
    <Layout title='Search page'>
      <Link href='/'>Back home</Link>
      <h1>
        {articles.length} Searches for {router.query.searchTerm}
      </h1>
      {articles.length === 0 && <h3>No articles available with this search</h3>}

      <div>
        {articles.map(article => (
          <ArticleItem key={article.url} article={article} />
        ))}
      </div>
    </Layout>
  );
};

export const getServerSideProps = async ({ query: { searchTerm } }) => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${process.env.API_KEY}&pageSize=10`
  );
  const data = await res.json();

  const articles = data.articles;

  return {
    props: {
      articles,
    },
  };
};

export default SearchPage;
