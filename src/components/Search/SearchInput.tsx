import { useState } from 'react';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { Webtoon, webtoonsList } from '../../model/webtoon';
import SearchIcon from './SearchIcon';
import styles from './SearchInput.module.css';
import SearchResult from './SearchResult';

function SearchInput() {
  const [keyword, setKeyword] = useState('');
  const [searched, setSearched] = useState<Webtoon[]>();
  const webtoonsLoadable = useRecoilValueLoadable<Webtoon[]>(webtoonsList);

  // eslint-disable-next-line operator-linebreak
  const webtoons: Webtoon[] =
    webtoonsLoadable.state === 'hasValue' ? webtoonsLoadable.contents : [];

  if (webtoonsLoadable.state === 'loading') {
    console.log('loading...');
    return <div> Loading</div>;
  }
  const search = () => {
    if (searched === null) {
      setSearched(undefined);
    }
    setSearched(
      webtoons.filter((webtoon) => {
        if (webtoon.name === keyword || webtoon.webtoonist === keyword) {
          return webtoon;
        }
        return null;
      }),
    );
    return null;
  };

  return (
    <div className={styles.inputWrapper}>
      <div className={styles.inputHeader}>
        <span className={styles.header}>어떤 작품을 찾으세요?</span>
        <span className={styles.description}>
          작품 이름, 작가를 입력해보세요.
        </span>
      </div>
      <form action="" className={styles.form}>
        <input
          type="search"
          required
          className={styles.searchInput}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="button" onClick={search}>
          <SearchIcon />
        </button>
      </form>
      {searched?.map((webtoon) => (
        <SearchResult webtoon={webtoon} />
      ))}
    </div>
  );
}

export default SearchInput;
