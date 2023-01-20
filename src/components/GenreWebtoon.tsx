// eslint-disable-next-line import/no-extraneous-dependencies
import { useRecoilValueLoadable } from 'recoil';
import { Webtoon, webtoonsList } from '../model/webtoon';
import styles from './styles/GenreWebtoon.module.css';

function GenreWebtoon() {
  const webtoonsLoadable = useRecoilValueLoadable<Webtoon[]>(webtoonsList);
  // eslint-disable-next-line operator-linebreak
  const webtoons: Webtoon[] =
    webtoonsLoadable.state === 'hasValue' ? webtoonsLoadable.contents : [];

  const webtoonPlatformList: Webtoon[] | [] = [];
  let k = 0;
  webtoons.map((webtoon) => {
    if (webtoon.genre === '개그') {
      webtoonPlatformList[k] = webtoon;
      k += 1;
    }
    return null;
  });

  const webtoonCardList: Webtoon[] = [];
  for (let i = 0; i < 8; i += 1) {
    // eslint-disable-next-line operator-linebreak
    webtoonCardList[i] =
      webtoonPlatformList[
        Math.floor(Math.random() * webtoonPlatformList.length)
      ];
  }

  // 장르 상태관리하여 선택되었으면 set 해주어야됨
  return (
    <div className={styles.webtoonWrapper}>
      <img
        alt={webtoonPlatformList[0].name}
        src={webtoonPlatformList[0].image}
      />
      <img
        alt={webtoonPlatformList[1].name}
        src={webtoonPlatformList[1].image}
      />
      <img
        alt={webtoonPlatformList[2].name}
        src={webtoonPlatformList[2].image}
      />
      <img
        alt={webtoonPlatformList[3].name}
        src={webtoonPlatformList[3].image}
      />
      <img
        alt={webtoonPlatformList[4].name}
        src={webtoonPlatformList[4].image}
      />
      <img
        alt={webtoonPlatformList[5].name}
        src={webtoonPlatformList[5].image}
      />
      <img
        alt={webtoonPlatformList[0].name}
        src={webtoonPlatformList[6].image}
      />
      <img
        alt={webtoonPlatformList[0].name}
        src={webtoonPlatformList[7].image}
      />
    </div>
  );
}

export default GenreWebtoon;
