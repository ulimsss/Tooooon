import cx from 'clsx';
import styles from './Pagination.module.css';

// interface OnClickProps {
//   onClick: (page: number) => void;
// }

// interface PageButtonProps extends OnClickProps {
//   number: number;

//   selected: boolean;
// }
// function PageButton({ number, onClick, selected }: PageButtonProps) {
//   return (
//     <button
//       type="button"
//       className={cx(styles.button, { [styles.selected]: selected })}
//       onClick={() => onClick(number)}
//     >
//       {number}
//     </button>
//   );
// }

// interface Props extends OnClickProps {
//   currentPage: number;
//   maxPage: number;
// }
interface Props {
  total: number;
  limit: number;
  page: number;
  setPage: any;
}

export default function Paginaion({ total, limit, page, setPage }: Props) {
  const numPages = Math.ceil(total / limit);
  console.log('numPaage:', numPages);
  console.log('total :', total);
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
