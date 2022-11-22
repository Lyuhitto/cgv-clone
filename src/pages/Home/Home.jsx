import React from 'react';
import MovieList from '../../components/MovieList/MovieList';
import Video from './../../components/Video/Video';
import NoticeClient from './../../components/NoticeClient/NoticeClient';
import Store from './../../components/Store/Store';
import SpecialHall from './../../components/SpecialHall/SpecialHall';
import Events from './../../components/Events/Events';

export default function Home() {
  return (
    <div>
      <Video />
      <MovieList />
      <Events />
      <SpecialHall />
      <Store />
      <NoticeClient />
    </div>
  );
}
