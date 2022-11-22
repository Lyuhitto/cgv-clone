import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderContent.module.css'

export default function HeaderContent() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.logo}>
          <Link to='/' className={styles.logoUrl}>
            <img src='/img/cgv.png' alt='cgv 로고' />
          </Link>
          <span>Cultureplex</span>
        </h1>
        <div className={styles.cardAndMenu}>
          <Link to='/'>
            <img
              src='/img/hyundai-card.png'
              alt='현대 카드 상시 6천 M포인트 사용! 이벤트 보러가기'
            />
          </Link>
          <ul className={styles.menuList}>
            {items.map((item, index) => (
              <li key={index} className={styles.menu}>
                <Link to={item.url} className={styles.menuUrl}>
                  <img src={item.src} alt='' />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const items = [
  { name: '로그인', src: '/img/loginPassword.png', url: '/' },
  { name: '회원가입', src: '/img/loginJoin.png', url: '/' },
  { name: 'My CGV', src: '/img/loginMember.png', url: '/' },
  { name: '고객센터', src: '/img/loginCustomer.png', url: '/' },
];
