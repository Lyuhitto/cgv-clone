import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import SearchBar from './SearchBar/SearchBar';
import BookAndUp from './BookAndUp/BookAndUp';

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollActive, setScrollActive] = useState(false);
  const [ishover, setHover] = useState(false);
  let items = [];
  for (const item of dropDownMenu) {
    items.push(item.item);
  }

  function handleScroll() {
    if (scrollY > 299) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  }
  useEffect(() => {
    function scrollListener() {
      window.addEventListener('scroll', handleScroll);
    } //  window 에서 스크롤을 감시 시작
    scrollListener(); // window 에서 스크롤을 감시
    // console.log('scroll', { scrollY });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // console.log('scroll close', { scrollY });
    }; //  window 에서 스크롤을 감시를 종료
  });
  
  return (
    <div
      className={
        scrollActive ? `${styles.fixedBox} ${styles.active}` : styles.fixedBox
      }
    >
      <div className={styles.container}>
        <div className={styles.navbar}>
          <h1
            className={
              scrollActive ? styles.logo : `${styles.logo} ${styles.logoHidden}`
            }
          >
            <Link to={'/'} className={styles.logoUrl}>
              <img src='/img/logoWhite.png' alt='cgv logo' />
            </Link>
          </h1>
          <div className={styles.menuWrapper}>
            <ul className={styles.navbarMenu} onMouseOver={() => setHover(true)}
              onMouseOut = {() => setHover(false)}
            >
              {dropDownMenu.map((d, index) => (
                <li key={index}>
                  <Link to={d.menuURL}>
                    <h2
                      className={
                        d.menu === '예매'
                          ? `${styles.menu} ${styles.menuAccent}`
                          : styles.menu
                      }
                    >
                      {d.menu}
                    </h2>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <SearchBar scrollActive={scrollActive} />
      </div>
      <div className={ishover ? styles.navbarContentWarapper : styles.navbarDisabled}>
        <ul id='content' className={styles.navbarContent}>
          {items.map((item, idx) => (
            <li key={idx}>
              <ul className={styles.detailContainer}>
                <h2 className={styles.detialName}>{dropDownMenu[idx].menu}</h2>
                {item.map((value, i) => (
                  <li className={styles.contentDetail}>
                    <Link to={value.url} className={styles.detailUrl}>
                      <h3 className={styles.detail}>{value.name}</h3>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <BookAndUp scrollActive={scrollActive} />
    </div>
  );
}
const dropDownMenu = [
  {
    menu: '영화',
    menuURL: '/',
    item: [
      { name: '무비차트', url: '/' },
      { name: '아트하우스', url: '/' },
      { name: 'ICECON', url: '/' },
    ],
  },
  {
    menu: '극장',
    menuURL: '/',
    item: [
      { name: 'CGV 극장', url: '/' },
      { name: '특별관', url: '/' },
    ],
  },
  {
    menu: '예매',
    menuURL: '/',
    item: [
      { name: '빠른예매', url: '/' },
      { name: '상영스케줄', url: '/' },
      { name: 'English Ticketing', url: '/' },
      { name: 'English Schedule', url: '/' },
    ],
  },
  {
    menu: '스토어',
    menuURL: '/',
    item: [
      { name: '영화관람권', url: '/' },
      { name: '기프트카드', url: '/' },
      { name: '콤보', url: '/' },
      { name: '팝콘', url: '/' },
      { name: '음료', url: '/' },
      { name: '스낵', url: '/' },
      { name: '플레이존', url: '/' },
      { name: '씨네샵 >', url: '/' },
    ],
  },
  {
    menu: '이벤트',
    menuURL: '/',
    item: [
      { name: 'SPECIAL', url: '/' },
      { name: '영화/예매', url: '/' },
      { name: '멤버십/CLUB', url: '/' },
      { name: 'CGV 극장별', url: '/' },
      { name: '제휴할인', url: '/' },
      { name: '당첨자 발표', url: '/' },
      { name: '종료된 이벤트', url: '/' },
    ],
  },
  {
    menu: '혜택',
    menuURL: '/',
    item: [
      { name: 'CGV 할인정보', url: '/' },
      { name: 'CLUB 서비스', url: '/' },
      { name: 'VIP 라운지', url: '/' },
    ],
  },
];
