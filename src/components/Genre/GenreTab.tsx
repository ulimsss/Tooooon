import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { GenreTabType, genreTab } from '../../model/genre';
import styles from './GenreTab.module.css';

export const GENRE_NAME = [
  '일상',
  '개그',
  '판타지',
  '액션',
  '드라마',
  '순정',
  '스릴러',
  '무협/사극',
  '스포츠',
  '학원',
];

function GenreTab() {
  const genreTabType = useRecoilState<GenreTabType>(genreTab);
  const urlGenre = useLocation().pathname.split('/')[2];
  console.log(urlGenre);
  // const onclick = () => {};
  return (
    <div className={styles.genreTabWapper}>
      {GENRE_NAME.map((genre) => (
        <Link
          to={`/genre/${genre}`}
          key={genre}
          className={styles.genreTabLink}
          // onClick={onclick}
        >
          {genre}
        </Link>
      ))}
    </div>
  );
}

export default GenreTab;
