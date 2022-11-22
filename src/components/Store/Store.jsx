import React from 'react';
import styles from './Store.module.css';
import StoreItem from './StoreItem';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function Store() {
  const {
    isLoading,
    error,
    data: items,
  } = useQuery(
    ['store'],
    async () => {
      // console.log('store now fetching...');
      return axios('/data/store-list.json')
        .then((res) => res.data.store)
        .catch((error) => console.log(error));
    },
    {
      staleTime: 5000,
    }
  );
  return (
    <div className={styles.container}>
        {isLoading && <p>Now Loading..</p>}
        {error && <p>ERROR!</p>}
        {items && (
          <ul className={styles.wrapper}>
            {items.map((item, idx) => (
              <li key={idx} className={styles.item}>
                <StoreItem item={item} />
              </li>
            ))}
          </ul>
        )}
    </div>
  );
}
