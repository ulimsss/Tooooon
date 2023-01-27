import React from 'react';
import { useSetRecoilState } from 'recoil';
import { GENRE_NAME } from '../../constants/genreTabs';
import { GenreTabType, genreTab } from '../../model/genre';
import styles from './GenreTab.module.css';

function GenreTab() {
  // const genreType = useRecoilState<GenreTabType>(genreTab)[0].genre;
  const setGenreTabType = useSetRecoilState<GenreTabType>(genreTab);
  const onclick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setGenreTabType({ genre: e.currentTarget.textContent! });
  };

  return (
    <div className={styles.genreTabWapper}>
      {GENRE_NAME.map((genre) => (
        <button
          type="button"
          key={genre}
          className={styles.genreTabLink}
          onClick={onclick}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}

export default GenreTab;
