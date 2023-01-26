import { platformName } from '../../constants/carousel';
import { PLATFORMARR } from '../../constants/platform';
import styles from './PlatformHeader.module.css';

function PlatformHeader() {
  return (
    <div className={styles.platformHeader}>
      {PLATFORMARR.map((platfrom) => (
        <div className={styles.platforms}>
          <img
            className={styles.logoImg}
            src={`/img/${platformName[platfrom]}.png`}
            alt="logo"
          />
          <div className={styles.logoPlatform}>{platfrom}</div>
        </div>
      ))}
    </div>
  );
}

export default PlatformHeader;
