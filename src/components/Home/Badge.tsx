import styles from './Badge.module.css';

function Badge(): JSX.Element {
  return (
    <div className={styles.badgeContainer}>
      <div className={styles.badgeContent}>Today Webtoon</div>
    </div>
  );
}

export default Badge;
