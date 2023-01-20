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
      {GENRE_NAME.map((genre) => <a href={`/genre/${genre}`}>{genre}</a>)}
    </div>
  );
}

export default GenreTab;
