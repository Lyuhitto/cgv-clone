import React, { useState, useQuery } from 'react';
import { randomValue } from './../../../customModule/random';
import { CiSearch } from 'react-icons/ci';
import styles from './SearchBar.module.css';

export default function SearchBar({ scrollActive }) {
  const keywordList = ['동감', '폴:600미터', '유포된 진실!'];
  const [random, setRandom] = useState(() => randomValue(0, 3));
  const [keyword, setKeyword] = useState(keywordList[random]);
  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyword('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={handleKeywordChange}
          value={keyword || ''}
          className={scrollActive ? styles.activedInput : ''}
        />
        <button type='submit' className={styles.searchBtn}>
          {!scrollActive && (
            <CiSearch className={` ${styles.icon} ${styles.normal}`} />
          )}
          {scrollActive && (
            <CiSearch className={` ${styles.icon} ${styles.white}`} />
          )}
        </button>
      </form>
    </div>
  );
}
