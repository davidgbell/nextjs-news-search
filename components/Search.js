import { useRouter } from 'next/router';
import React, { useState } from 'react';

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const router = useRouter();

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        router.push(`/articles/search?searchTerm=${searchTerm}`);
        setSearchTerm('');
      }}>
      <input
        type='text'
        onChange={e => setSearchTerm(e.target.value)}
        placeholder='search'
      />
    </form>
  );
};
