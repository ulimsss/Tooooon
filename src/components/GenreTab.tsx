import { Link } from 'react-router-dom';
import styles from './styles/GenreTab.module.css';

const GENRE_NAME = [
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
  return (
    <div className={styles.genreTabWapper}>
      {GENRE_NAME.map((genre) => (
        <Link
          to={`/genre/${genre}`}
          key={genre}
          className={styles.genreTabLink}
        >
          {genre}
        </Link>
      ))}
    </div>
  );
}

export default GenreTab;
