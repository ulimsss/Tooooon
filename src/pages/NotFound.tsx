import { Link } from 'react-router-dom';
import styles from './styles/NotFound.module.css';

function NotFound() {
  return (
    <>
      <h1 className={styles.title}>404</h1>
      <p className={styles.page}>페이지를 찾을 수 없습니다.</p>
      <div className={styles.linkWrapper}>
        <Link to="/" className={styles.link}>
          메인으로 →
        </Link>
      </div>
    </>
  );
}

export default NotFound;
