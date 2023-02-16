import SearchIcon from './SearchIcon';
import styles from './SearchInput.module.css';

function SearchInput() {
  return (
    <div className={styles.inputWrapper}>
      <div className={styles.inputHeader}>어떤 작품을 찾으세요?</div>
      <form action="" className={styles.form}>
        <input type="search" required className={styles.searchInput} />
        <SearchIcon />
      </form>
    </div>
  );
}

export default SearchInput;
