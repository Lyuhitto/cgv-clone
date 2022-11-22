import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { randomValue } from './../../../customModule/random';
import styles from './TopBanner.module.css';

export default function TopBanner() {
  const [random, setRandom] = useState(() => randomValue(0, 3));
  const [isClose, setClose] = useState(false);
  const result = useQuery(
    ['banners'],
    async () => {
      console.log('topBanner now fetching...');
      return axios('data/topBanner.json').then((res) => res.data.item);
    },
    {
      staleTime: 5000,
    }
  );
  const { isLoading, error, data: banners } = result;
  if (isLoading) return <p>loading..</p>;
  if (error) return <p>error</p>;
  const banner = banners[random];
  const color = banner.backgroundColor;
  const style = { backgroundColor: `${color}` };
  console.log(color);
  return (
    <div className={isClose ? ` ${styles.disabled}` : ''} style={style}>
      <div className={styles.banner}>
        <Link to={'/'}>
          <img src={banner.bannerUrl} alt={banner.bannerDesc} />
        </Link>
        <button
          aria-label='배너 끄기'
          onClick={() => setClose(true)}
          className={styles.closeBtn}
        >
          <img src='/img/btn_ad_close.png' alt='' />
        </button>
      </div>
    </div>
  );
}
