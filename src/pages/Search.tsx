import styles from './styles/Search.module.css';
import SearchCom from '../components/Search/SearchCom';

function Search(): JSX.Element {
  return (
    <div className={styles.search}>
      <SearchCom />
    </div>
  );
}

export default Search;
