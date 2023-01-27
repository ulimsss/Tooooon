import cx from 'clsx';
import styles from './Pagination.module.css';

interface Props {
  total: number;
  limit: number;
  page: number;
  setPage: any;
}

export default function Paginaion({ total, limit, page, setPage }: Props) {
  const numPages = Math.ceil(total / limit);
  return (
    <div>
      <button
        type="button"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className={cx(styles.button, styles.whiteButton, {
          [styles.disabled]: page === 1,
        })}
      >
        이전
      </button>
      {Array(numPages)
        .fill(0)
        .map((_, idx) => (
          <button
            type="button"
            key={idx + 1}
            className={cx(styles.button)}
            onClick={() => setPage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
      <button
        type="button"
        onClick={() => setPage(page + 1)}
        disabled={page === numPages}
        className={cx(styles.button, styles.whiteButton, {
          [styles.disabled]: page === total,
        })}
      >
        다음
      </button>
    </div>
  );
}
