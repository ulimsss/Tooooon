import { useEffect, useRef, useState } from 'react';
import styles from './PlatformCarousel.module.css';

function CarouselTesT() {
  const containerCarousel = useRef();
  const [nowX, setNowX] = useState(0);
  useEffect(() => {
    containerCarousel.current.style.transform = `translateX(${nowX}vw)`;
  }, [nowX]);
  // useState 말고 useEffect를 이용해야할듯.
  const clickLeftButton = () => {
    // setNowX(nowX + 20);
    setNowX((prop) => prop + 20);
    console.log(`it's work ${nowX}`);
  };
  const clickRightButton = () => {
    setNowX(nowX - 20);
    console.log(`it's work ${nowX}`);
  };
  return (
    <div className="body" style={{ overflow: 'hidden' }}>
      <div>{nowX}</div>
      <label className={styles.left} onClick={clickLeftButton}>
        left
      </label>
      <label className={styles.right} onClick={clickRightButton}>
        right
      </label>
      <div className={styles.containerCarousel} ref={containerCarousel}>
        <div className={styles.inner}>
          <img src="img/img1.jpg" alt="test1" />
        </div>
        <div className="inner">
          <img src="img/img2.jpg" alt="test2" />
        </div>
        <div className="inner">
          <img src="img/img1.jpg" alt="test3" />
        </div>
        <div className="inner">
          <img src="img/img2.jpg" alt="test4" />
        </div>
        <div className="inner">
          <img src="img/img1.jpg" alt="test5" />
        </div>
        <div className="inner">
          <img src="img/img2.jpg" alt="test6" />
        </div>
        <div className="inner">
          <img src="img/img1.jpg" alt="test7" />
        </div>
        <div className="inner">
          <img src="img/img2.jpg" alt="test8" />
        </div>
        <div className="inner">
          <img src="img/img1.jpg" alt="test9" />
        </div>
        <div className="inner">
          <img src="img/img2.jpg" alt="test10" />
        </div>
      </div>
    </div>
  );
}

export default CarouselTesT;
