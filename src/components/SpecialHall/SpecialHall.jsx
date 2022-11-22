import React, { useState } from 'react';
import styles from './SpecialHall.module.css';
import { Link } from 'react-router-dom';
import SeeAll from '../SeeAll/SeeAll';
export default function SpecialHall() {
  const [hoverd, setHoverd] = useState(0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>특별관</h1>
          <SeeAll url='/' />
        </div>
        <div className={styles.content}>
          <div className={styles.hallImg}>
            <Link to={imgList[hoverd].url} className={styles.img}>
              <img src={imgList[hoverd].src} alt={imgList[hoverd].alt} />
            </Link>
          </div>
          <ul className={styles.hallList}>
            {hallList.map((hall, idx) => (
              <li
                key={idx}
                className={
                  idx === hoverd
                    ? `${styles.hall} ${styles.active}`
                    : styles.hall
                }
              >
                <Link
                  to={hall.url}
                  onMouseOver={() => setHoverd(idx)}
                  className={styles.hallInfo}
                >
                  <strong className={styles.hallName}>{hall.name}</strong>
                  <span className={styles.hallTag}>{hall.tag}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
const imgList = [
  { src: '/img/specialHall/suite.png', alt: 'Suite Cinema', url: '/' },
  { src: '/img/specialHall/living.png', alt: 'CINE & Livingroom', url: '/' },
  { src: '/img/specialHall/4dx.png', alt: '4DX', url: '/' },
  { src: '/img/specialHall/chef.png', alt: 'CINE & Chef', url: '/' },
];
const hallList = [
  { name: 'SUITE CINEMA', tag: '#호텔 컨셉의 프리미엄관', url: '/' },
  { name: 'CINE & LIVINGROOM', tag: '#신개념 소셜 상영관', url: '/' },
  { name: '4DX', tag: '#모션시트 #오감체험', url: '/' },
  { name: 'CINE de Chef', tag: '#쉐프가 있는 영화관', url: '/' },
];
