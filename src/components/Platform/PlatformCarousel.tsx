import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Webtoon } from '../../model/webtoon';
import styles from './PlatformCarousel.module.css';
import { NextArrow, PrevArrow } from './Arrow';

function PlatformCarousel({ webtoons }: { webtoons: Webtoon[] }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 5,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  // 사용할 Carousel의 기본 세팅을 해준다. props로 받아 와야 하기 때문에 객체에 넣어서 받아온다.
  // 더 많은 설정이 있지만, 그것은 직접 코드를 뜯어 보면 쉽게 알 수 있다.
  // 위의 설정은 홈페이지에 나와있는 기본 설정을 한번에 보여줄 갯수만 1개로 바꾼 것이다.
  return (
    <section className="page-carousel">
      <Slider {...settings}>
        {webtoons.map((webtoon) => (
          <div className={styles.cardListWrapper}>
            <button
              type="button"
              onClick={() => {
                window.open(webtoon.URL, '_blank');
              }}
            >
              <span className={styles.description}>
                <p className={styles.cardName}>{webtoon.name}</p>
                <p className={styles.cardToonist}>{webtoon.webtoonist}</p>
                <i className="bx bx-link-external" />
              </span>
            </button>
            <img alt={webtoon.name} src={webtoon.image} />
            {/* <div clzassName={styles.cardDescription} /> */}
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default PlatformCarousel;
