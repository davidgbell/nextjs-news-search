import Link from 'next/link';
import React from 'react';

export const ArticleItem = ({ article }) => {
  return (
    <div>
      <h3>{article.title}</h3>
      <p>{article.author}</p>
      <p>{article.description}</p>
      <Link href='#'>Find out more</Link>
    </div>
  );
};
