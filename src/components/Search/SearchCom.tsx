import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { Webtoon, webtoonsList } from '../../model/webtoon';
import Filter from './Filter';
import styles from './SearchCom.module.css';

function Search() {
  const [word, setWord] = useState('');
  const webtoonsLoadable = useRecoilValueLoadable<Webtoon[]>(webtoonsList);
  // eslint-disable-next-line operator-linebreak
  const webtoons: Webtoon[] =
    webtoonsLoadable.state === 'hasValue' ? webtoonsLoadable.contents : [];
  // const [filterItems, setFilterItems] = useState<Webtoon[]>([]);
  const filterItems: Webtoon[] = [];
  const $search = useRef<HTMLInputElement>(null);
  const $searchedItem = '.searchedItem';

  if (webtoonsLoadable.state === 'loading') {
    console.log('loading...');
    return <div> Loading</div>;
  }

  return (
    <div className={styles.searchWrapper}>
      <Filter />
    </div>
  );
}

export default Search;
