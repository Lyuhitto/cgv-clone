import React from 'react';
import styles from './FooterAd.module.css';

export default function FooterAd() {
  return (
    <div className={styles.container}>
      <a
        href='http://ad.cgv.co.kr/click/CGV/CGV_201401/main@Bottom?ads_id%3d28594%26creative_id%3d65633%26click_id%3d85906%26content_series%3d%26event%3d'
        target='_blank'
        rel='noopener noreferrer'
        className={styles.ad}
      >
        <img
          src='img/footer-ad.png'
          alt='CGV 우리카드 출시. 매월 영화 1매 무료에 5천원 할인까지. 이벤트 페이지 가기'
        ></img>
      </a>
    </div>
  );
}
