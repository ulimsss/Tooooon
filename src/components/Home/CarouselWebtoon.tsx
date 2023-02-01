// eslint-disable-next-line import/no-extraneous-dependencies
import { useRecoilValueLoadable } from 'recoil';
import { Carousel } from 'react-responsive-carousel';
import styles from './CarouselWebtoon.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Webtoon, webtoonsList } from '../../model/webtoon';
import LogoBadge from './LogoBadge';
import { createCarouselItems, getRandomArr } from '../../helpers/help';
import { CAROUSEL_SIZE } from '../../constants/carousel';

function CarouselWebtoon() {
  const webtoonsLoadable = useRecoilValueLoadable<Webtoon[]>(webtoonsList);

  // eslint-disable-next-line operator-linebreak
  const webtoons: Webtoon[] =
    webtoonsLoadable.state === 'hasValue' ? webtoonsLoadable.contents : [];

  if (webtoonsLoadable.state === 'loading') {
    console.log('loading...');
    return <div> Loading</div>;
  }

  // const carouselNum = getRandomArr(webtoons.length, CAROUSEL_SIZE);
  const carouselNum = [795, 380, 810, 222, 560];
  const carouselDataArr = createCarouselItems(webtoons, carouselNum);

  return (
    <Carousel
      autoPlay
      showThumbs={false}
      showArrows
      showIndicators={false}
      interval={3000}
      showStatus={false}
      infiniteLoop
      className="carousel"
    >
      {carouselDataArr.map((item: Webtoon) => (
        <div key={item.id} className={styles.carouselWrapper}>
          <a
            href={item.URL}
            className={styles.itemURL}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.image} alt={item.name} className={styles.bgImage} />
            <div className={styles.carouselItem}>
              <h2 className={styles.itemName}>{item.name}</h2>
              <p className={styles.itemWebtoonist}>{item.webtoonist}</p>
              <p className={styles.itemDescription}>{item.description}</p>
            </div>
            <LogoBadge platform={item.platform} />
          </a>
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselWebtoon;
