import { useRecoilValueLoadable } from 'recoil';
import styles from './PlatformList.module.css';
import { createCarouselItems, getRandomArr } from '../../helpers/help';
import { Webtoon, webtoonsList } from '../../model/webtoon';
import CarouselTesT from './PlatformCarousel';

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

  const webtoonSize = getRandomArr(webtoonPlatformList.length, 20);
  const webtoonCardList: Webtoon[] = createCarouselItems(
    webtoonPlatformList,
    webtoonSize,
  );

  return <CarouselTesT webtoons={webtoonCardList} />;
}

export default PlatformList;
