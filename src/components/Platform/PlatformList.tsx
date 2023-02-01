import { useRecoilValueLoadable } from 'recoil';
import styles from './PlatformList.module.css';
import { createCarouselItems, getRandomArr } from '../../helpers/help';
import { Webtoon, webtoonsList } from '../../model/webtoon';

function PlatformList({ platformName }: { platformName: string }) {
  const webtoonsLoadable = useRecoilValueLoadable<Webtoon[]>(webtoonsList);
  if (webtoonsLoadable.state === 'loading') {
    return <div> Loading</div>;
  }
  // eslint-disable-next-line operator-linebreak
  const webtoons: Webtoon[] =
    webtoonsLoadable.state === 'hasValue' ? webtoonsLoadable.contents : [];

  const webtoonPlatformList = webtoons.filter(
    (webtoon) => webtoon.platform.includes(platformName),
    // eslint-disable-next-line function-paren-newline
  );
  if (platformName === '카카오') {
    console.log(webtoonPlatformList);
  }

  const webtoonSize = getRandomArr(webtoonPlatformList.length, 20);
  const webtoonCardList: Webtoon[] = createCarouselItems(
    webtoonPlatformList,
    webtoonSize,
  );
  return (
    <div className={styles.listWrapper}>
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
              <div className={styles.cardName}>{webtoonCard.name}</div>
              <div className={styles.cardToonist}>{webtoonCard.webtoonist}</div>
              <i className="bx bx-link-external" />
            </div>
          </button>
          {/* <div className={styles.cardDescription} /> */}
        </div>
      ))}
    </div>
  );
}

export default PlatformList;
