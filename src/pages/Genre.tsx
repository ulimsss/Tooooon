import { Route } from 'react-router';
import styles from './styles/Genre.module.css';
import GenreTab from '../components/Genre/GenreTab';
import GenreWebtoon from '../components/Genre/GenreWebtoon';

function Genre() {
  return (
    <div className={styles.genre}>
      <GenreTab />
      <GenreWebtoon />
    </div>
  );
}

export default Genre;
