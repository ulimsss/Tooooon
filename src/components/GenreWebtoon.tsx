// eslint-disable-next-line import/no-extraneous-dependencies
import { useRecoilValueLoadable } from 'recoil';
import { getRandomArr, createCarouselItems } from '../helpers/help';
import { Webtoon, webtoonsList } from '../model/webtoon';
import styles from './styles/GenreWebtoon.module.css';

function GenreWebtoon() {
  const webtoonsLoadable = useRecoilValueLoadable<Webtoon[]>(webtoonsList);
  if (webtoonsLoadable.state === 'loading') {
    return <div> Loading</div>;
  }
  // eslint-disable-next-line operator-linebreak
  const webtoons: Webtoon[] =
    webtoonsLoadable.state === 'hasValue' ? webtoonsLoadable.contents : [];

  const webtoonPlatformList = webtoons.filter((webtoon) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    webtoon.genre.includes('드라마'),
  );

  console.log(webtoonPlatformList.length);
  const webtoonSize = getRandomArr(webtoonPlatformList.length, 8);
  console.log(webtoonSize);
  const webtoonCardList: Webtoon[] = createCarouselItems(
    webtoonPlatformList,
    webtoonSize,
  );

  // 장르 상태관리하여 선택되었으면 set 해주어야됨
  return (
    <div className={styles.webtoonWrapper}>
      {webtoonCardList.map((webtoonCard) => (
        <div className={styles.cardListWrapper}>
          <button
            type="button"
            onClick={() => {
              window.open(webtoonCard.URL, '_blank');
            }}
          >
            <img alt={webtoonCard.name} src={webtoonCard.image} />
            <div className={styles.description}>
              {webtoonCard.description}
              <i className="bx bx-link-external" />
            </div>
          </button>
          <div className={styles.cardDescription}>
            <div className={styles.cardName}>{webtoonCard.name}</div>
            <div className={styles.cardToonist}>{webtoonCard.webtoonist}</div>
          </div>
        </div>
      ))}
      {/* <img alt={webtoonCardList[0].name} src={webtoonCardList[0].image} />
      <img alt={webtoonCardList[1].name} src={webtoonCardList[1].image} />
      <img alt={webtoonCardList[2].name} src={webtoonCardList[2].image} />
      <img alt={webtoonCardList[3].name} src={webtoonCardList[3].image} />
      <img alt={webtoonCardList[4].name} src={webtoonCardList[4].image} />
      <img alt={webtoonCardList[5].name} src={webtoonCardList[5].image} />
      <img alt={webtoonCardList[0].name} src={webtoonCardList[6].image} />
      <img alt={webtoonCardList[0].name} src={webtoonCardList[7].image} /> */}
    </div>
  );
}

export default GenreWebtoon;
