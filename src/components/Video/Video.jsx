import React, { useCallback, useState } from 'react';
import styles from './Video.module.css';
import { BsChevronRight } from 'react-icons/bs';
import { FiPause, FiPlay } from 'react-icons/fi';
import { VscMute, VscUnmute } from 'react-icons/vsc';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { randomValue } from '../../customModule/random';
import SeeAll from './../SeeAll/SeeAll';

export default function Video() {
  const [videoState, setVideoState] = useState({
    playing: true,
    muted: true,
  });
  const [random, setRandom] = useState(() => randomValue(0, 3));
  const togglePlay = () => {
    setVideoState((state) => ({ ...state, playing: !state.playing }));
  };
  const toggleMute = () => {
    setVideoState((state) => ({ ...state, muted: !state.muted }));
  };
  const result = useQuery(
    ['trailers'],
    async () => {
      console.log('trailers now fetching...');
      return axios('data/trailers.json').then((res) => res.data.item);
    },
    {
      staleTime: 5000,
    }
  );
  const { isLoading, error, data: trailers } = result;
  if (isLoading) return <p>loading..</p>;
  if (error) return <p>error</p>;
  const trailer = trailers[random];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <ReactPlayer
          className={styles.video}
          url={trailer.videoUrl}
          playing={videoState.playing}
          muted={videoState.muted}
          width='100%'
          height='100%'
        />
        <div className={styles.videoContent}>
          <strong className={styles.videoName}>{trailer.videoTitle}</strong>
          <span className={styles.videoDesc}>
            {trailer.videoDesc1}
            <br />
            {trailer.videoDesc2}
          </span>
          <div className={styles.videoControll}>
            <Link className={styles.seeDetail}
              url={'/'}
            >상세보기</Link>
            <button
              type='button'
              onClick={togglePlay}
              className={styles.controllBtn}
            >
              {videoState.playing && (
                <FiPause className={styles.controllIcon} />
              )}
              {!videoState.playing && (
                <FiPlay className={styles.controllIcon} />
              )}
            </button>
            <button
              type='button'
              onClick={toggleMute}
              className={styles.controllBtn}
            >
              {videoState.muted && (
                <VscUnmute className={styles.controllIcon} />
              )}
              {!videoState.muted && <VscMute className={styles.controllIcon} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
