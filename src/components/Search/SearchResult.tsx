import { Webtoon } from '../../model/webtoon';
import styles from './SearchResult.module.css';

function SearchResult({ webtoon }: { webtoon: Webtoon }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cardListWrapper}>
        <button
          type="button"
          onClick={() => {
            window.open(webtoon.URL, '_blank');
          }}
        >
          <img alt={webtoon.name} src={webtoon.image} />
        </button>
        {/* <div clzassName={styles.cardDescription} /> */}
      </div>
      <span className={styles.description}>
        <button
          type="button"
          onClick={() => {
            window.open(webtoon.URL, '_blank');
          }}
          className={styles.cardName}
        >
          {webtoon.name}
          <i className="bx bx-link-external" />
        </button>

        <p className={styles.cardToonist}>{webtoon.webtoonist}</p>

        <p className={styles.webtoonDes}>{webtoon.description}</p>
      </span>
    </div>
  );
}

export default SearchResult;
