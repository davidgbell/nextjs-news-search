import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from '../styles/Search.module.css';

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const router = useRouter();

  return (
    <form
      className={styles.search}
      onSubmit={e => {
        e.preventDefault();
        router.push(`/search?searchTerm=${searchTerm}`);
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
