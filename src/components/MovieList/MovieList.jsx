import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import styles from './MovieList.module.css';
import axios from 'axios';
import SeeAll from '../SeeAll/SeeAll';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Autoplay]);

export default function MovieList() {
  const nowPlaying = 'nowPlaying';
  const upComing = 'upComing';
  const [listType, setListType] = useState(nowPlaying);
  const param = process.env.REACT_APP_API_KEY;
  const {
    isLoading,
    error,
    data: results,
  } = useQuery(
    [{ listType }],
    async () => {
      console.log('results now fetching...');
      if (listType === nowPlaying) {
        return axios(
          // '/data/searchDailyBoxOfficeList.json'
          'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=a3778979723732d6c88f356c93928bba&targetDt=20221118'
        )
          .then((res) => res.data.boxOfficeResult.dailyBoxOfficeList)
          .catch((error) => console.log(error));
      } else if (listType === upComing) {
        return axios(
          // '/data/upcoming.json'
          'https://api.themoviedb.org/3/movie/upcoming?api_key=484deec1f576ea932b7cf4181909aacf&language=ko-KR&page=1&region=KR'
        )
          .then((res) => res.data.results)
          .catch((error) => console.log(error));
      } else {
        return;
      }
    },
    {
      staleTime: 5000,
    }
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.buttonList}>
          <div className={styles.movieBtn}>
            <button
              type='button'
              onClick={() => setListType(nowPlaying)}
              className={listType === nowPlaying ? '' : styles.notSelected}
            >
              무비 차트
            </button>
            <button
              type='button'
              onClick={() => setListType(upComing)}
              className={listType === upComing ? '' : styles.notSelected}
            >
              상영 예정작
            </button>
          </div>
          <SeeAll url={'/'} />
        </div>
        <div >
          <div className={styles.swiperWrapper}>
            {isLoading && <p>loading</p>}
            {error && <p>ERROR!</p>}
            {results && (
              <Swiper
                spaceBetween={32}
                slidesPerView={5}
                slidesPerGroup={5}
                className={styles.swiper}
                navigation
              >
                {results.map((result, idx) => (
                  <SwiperSlide key={idx} className={styles.slide}>
                    <div className={styles.imgWrapper}>
                      <img
                        src={
                          listType == nowPlaying
                            ? `https://file.cineq.co.kr/i.aspx?movieid=${result.movieCd}`
                            : `https://www.themoviedb.org/t/p/w1280${result.poster_path}`
                        }
                        alt=''
                        className={styles.img}
                      />
                    </div>
                    <div className={styles.more}>
                      <Link to={'/'} className={styles.moreDetail}>상세보기</Link>
                      <Link to={'/'} className={styles.bookNow}>예매하기</Link>
                    </div>
                    <div className={styles.movieInfo}>
                      <strong className={styles.movieTitle}>
                        {listType == nowPlaying ? result.movieNm : result.title}
                      </strong>
                      <div className={styles.InfoDetail}>
                        <img src='/img/egg.png' alt=''  className={styles.egg}/>
                        <span>평가</span>
                        <span>예매율</span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
