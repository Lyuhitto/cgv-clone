import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SeeAll.module.css';
import { AiOutlineRight } from 'react-icons/ai';

export default function SeeAll({ url, text }) {
  return (
    <Link to={url} className={styles.container}>
      <span>{text ? text : '전체보기'}</span>
    </Link>
  );
}
