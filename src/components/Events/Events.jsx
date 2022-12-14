import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Events.module.css';
import SeeAll from './../SeeAll/SeeAll';
import { BsPlay, BsPause } from 'react-icons/bs';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Link } from 'react-router-dom';

SwiperCore.use([Navigation, Autoplay]);

export default function Event() {
  const [autoStop, setAutoStop] = useState(false);
  const [swiper, setSwiper] = useState(null);
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>Event</h3>
          <div className={styles.buttonWrapper}>
            <button
              className={styles.stopButton}
              type='button'
              onClick={() => {
                setAutoStop((prev) => !prev);
                autoStop ? swiper.autoplay.start() : swiper.autoplay.stop();
              }}
            >
              {autoStop && <BsPlay className={styles.icon}/>}
              {!autoStop && <BsPause className={styles.icon} />}
            </button>
            <SeeAll />
          </div>
        </div>
        <div className={styles.swiperWrapper}>
          <Swiper
            onSwiper={setSwiper}
            spaceBetween={24}
            slidesPerView={3}
            slidesPerGroup={3}
            className={styles.swiper}
            navigation
            autoplay={{ delay: 3000 }}
          >
            {eventList.map((event, idx) => (
              <SwiperSlide key={idx} className={styles.slide}>
                <Link to={event.url} className={styles.slideContent}>
                  <img src={event.img} alt='' className={styles.img} />
                  <strong className={styles.title}>{event.name}</strong>
                  <span className={styles.period}>{event.period}</span>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
const eventList = [
  {
    title: '?????? ?????? ??????, [CGV VIP ????????????!]',
    period: '2022.11.17~2022.12.31',
    url: '/',
    img: '/img/events/gabozago.jpg',
  },
  {
    title: '?????????????????? ??????????????????',
    period: '2022.11.15~2022.12.31',
    url: '/',
    img: '/img/events/worldcup.jpg',
  },
  {
    title: '????????? ????????? ????????? ?????? [CGV PLUS x2]',
    period: '2022.11.15~2022.11.30',
    url: '/',
    img: '/img/events/double.jpg',
  },
  {
    title: '[?????? ??????: ????????? ?????????]????????????',
    period: '2022.11.02~2022.11.27',
    url: '/',
    img: '/img/events/wakandaMark.jpeg',
  },
  {
    title: '[????????????:????????? ?????????]IMAX ????????? ?????????',
    period: '2022.11.11~2022.11.22',
    url: '/',
    img: '/img/events/wakandaImax.jpg',
  },
  {
    title: '????????? ??????????????????????????? ?????? ?????????',
    period: '2022.11.14~2022.11.20',
    url: '/',
    img: '/img/events/paconnie.jpg',
  },
  {
    title: '<??????> ????????? ?????? ?????????',
    period: '2022.11.18~2022.11.23',
    url: '/',
    img: '/img/events/quiz.jpg',
  },
];
