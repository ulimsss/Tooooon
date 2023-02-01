// import { ChangeEvent, useEffect, useRef, useState } from 'react';
// import { useRecoilState, useRecoilValueLoadable } from 'recoil';
// import { Webtoon, webtoonsList } from '../../model/webtoon';
// import styles from './SearchCom.module.css';

// function Search() {
//   const [word, setWord] = useState('');
//   const webtoonsLoadable = useRecoilValueLoadable<Webtoon[]>(webtoonsList);
//   // eslint-disable-next-line operator-linebreak
//   const webtoons: Webtoon[] =
//     webtoonsLoadable.state === 'hasValue' ? webtoonsLoadable.contents : [];
//   // const [filterItems, setFilterItems] = useState<Webtoon[]>([]);
//   const filterItems: Webtoon[] = [];
//   const $search = useRef<HTMLInputElement>(null);
//   const $searchedItem = '.searchedItem';

//   if (webtoonsLoadable.state === 'loading') {
//     console.log('loading...');
//     return <div> Loading</div>;
//   }

//   const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setWord(event?.target.value);
//   };

//   const search = () => {
//     console.log(webtoons);
//     webtoons.forEach((p) => {
//       if (p.name.indexOf(word) === -1) {
//         return;
//       }
//       filterItems.push(p);
//     });
//   };

//   return (
//     <div className={styles.searchWrapper}>
//       <input
//         id="keyword"
//         type="text"
//         className={styles.searchInput}
//         onChange={handleSearchChange}
//         ref={$search}
//         value={word}
//       />
//       <button type="button" className={styles.searchBtn} onClick={search}>
//         <span>검색</span>
//       </button>
//       <ul className={styles.searchedList}>
//         {filterItems.map((webtoon) => (
//           <li key={webtoon.id} className={styles.searchedItem}>
//             <button
//               className={styles.searchedBtn}
//               type="button"
//               onClick={(e) => {
//                 e.preventDefault();
//                 setWord('');
//                 window.open(webtoon.URL, '_blank');
//               }}
//               onTouchStart={(e) => {
//                 e.preventDefault();
//                 setWord('');
//                 window.open(webtoon.URL, '_blank');
//               }}
//             >
//               <span className={styles.title}>{webtoon.name}</span>
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Search;
