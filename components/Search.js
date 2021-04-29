import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from '../styles/Search.module.css';

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const router = useRouter();

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    router.push(`/search?searchTerm=${searchTerm}`);
    setSearchTerm('');
  };

  return (
    <form className={styles.search} onSubmit={onSubmit}>
      <input
        type='text'
        name='search'
        onChange={handleChange}
        value={searchTerm || ''}
        placeholder='search'
      />
    </form>
  );
};
