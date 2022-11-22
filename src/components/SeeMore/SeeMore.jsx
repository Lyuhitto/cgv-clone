import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SeeMore.module.css';

export default function SeeMore({ url }) {
  return (
    <Link to={url} className={styles.container}>
      더보기
    </Link>
  );
}
