// eslint-disable-next-line import/no-extraneous-dependencies
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { getRandomArr, createCarouselItems } from '../../helpers/help';
import { genreTab, GenreTabType } from '../../model/genre';
import { Webtoon, webtoonsList } from '../../model/webtoon';
import styles from './GenreWebtoon.module.css';

function GenreWebtoon() {
  const genreType = useRecoilState<GenreTabType>(genreTab)[0].genre;
  const webtoonsLoadable = useRecoilValueLoadable<Webtoon[]>(webtoonsList);
  if (webtoonsLoadable.state === 'loading') {
    return <div> Loading</div>;
  }

  // eslint-disable-next-line operator-linebreak
  const webtoons: Webtoon[] =
    webtoonsLoadable.state === 'hasValue' ? webtoonsLoadable.contents : [];

  const webtoonPlatformList = webtoons.filter(
    (webtoon) => webtoon.genre.includes(genreType),
    // eslint-disable-next-line function-paren-newline
  );

  const webtoonSize = getRandomArr(webtoonPlatformList.length, 8);
  const webtoonCardList: Webtoon[] = createCarouselItems(
    webtoonPlatformList,
    webtoonSize,
  );
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
    </div>
  );
}

export default GenreWebtoon;
