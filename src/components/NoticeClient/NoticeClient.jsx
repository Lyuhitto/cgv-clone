import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NoticeClient.module.css';
import SeeMore from './../SeeMore/SeeMore';

export default function NoticeClient() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.noticeBox}>
          <div className={styles.noticeCustomer}>
            <div className={styles.noticeWrapper}>
              <strong className={styles.noticeTitle}>공지사항</strong>
              <Link to={'/'} className={styles.notice}>
              [기타]22년 VIP 선정 기준 변경 및 추가 기준 관련 안내
              </Link>
              <SeeMore />
            </div>
            <div className={styles.customer}>
              <dl>
                <dt>
                  <strong className={styles.noticeTitle}>고객센터</strong>
                </dt>
                <dd>
                  <strong aria-label='고객센터 전화번호'>1544-1122</strong>
                  <span>고객 센터 운영시간 (평일 9:00~18:00)</span>
                  <span>업무시간 외 자동응답 안내 가능합니다.</span>
                </dd>
              </dl>
              <div className={styles.services}>
                <Link to={'/'} className={styles.link}>
                  FAQ
                </Link>
                <Link to={'/'} className={styles.link}>
                  1:1문의
                </Link>
                <Link to={'/'} className={styles.link}>
                  대관/단체 문의
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.downloadWrapper}>
            <stong className={styles.noticeTitle}>앱 다운로드</stong>
            <span>CGV앱에서 더 편리하게 이용하세요</span>
            <img src='/img/CGV-qr.gif' alt='CGV앱 QR.' />
            <p>
              QR코드를 스캔하고
              <br />
              앱설치 페이지로 바로 이동하세요
            </p>
          </div>
        </div>
        <Link to={'/'} className={styles.giftCardAd}>
        
          <img
            src='/img/giftCardBanner.jpg'
            alt='CGV 기프트 가드. 영화 팝콘, 굿즈까지! CGV 스토어 가기.'
          />
        </Link>
      </div>
    </div>
  );
}
