import React from 'react';
import { ArticleItem } from '../../components/ArticleItem';
import Layout from '../../components/Layout';

const SearchPage = ({ articles }) => {
  return (
    <Layout title='Search page'>
      <h1>Search</h1>
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

  console.log(articles[0]);

  return {
    props: {
      articles,
    },
  };
};

export default SearchPage;
