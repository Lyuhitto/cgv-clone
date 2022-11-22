import React from 'react';
import SeeMore from './../SeeMore/SeeMore';
import styles from './StoreItem.module.css';
import { Link } from 'react-router-dom';

export default function StoreItem({ item }) {
  return (
    <dl className={styles.container}>
      <dt className={styles.itemTitle}>
        <div className={styles.title}>{item.list}</div>
        <SeeMore />
      </dt>
      {item.listItems.map((i, idx) => (
        <dd key={idx} className={styles.productWrapper}>
          <Link to={i.url} className={styles.product}>
            <div className={styles.productImg}>
              <img src={i.img} alt='' />
            </div>
            <div className={styles.productInfo}>
              <span>{i.name}</span>
              <strong>{i.price}</strong>
            </div>
          </Link>
        </dd>
      ))}
    </dl>
  );
}
