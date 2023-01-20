import styles from './styles/Genre.module.css';
import GenreTab from '../components/GenreTab';
import GenreWebtoon from '../components/GenreWebtoon';

function Genre() {
  return (
    <div className={styles.genre}>
      <GenreTab />
      <GenreWebtoon />
    </div>
  );
}

export default Genre;
