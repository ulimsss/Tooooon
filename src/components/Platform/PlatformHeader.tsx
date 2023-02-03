import { platformName } from '../../constants/carousel';
import { PLATFORMARR } from '../../constants/platform';
import styles from './PlatformHeader.module.css';

function PlatformHeader({ platform }: { platform: string }) {
  return (
    <div className={styles.platformHeader}>
      <div className={styles.platforms}>
        <img
          className={styles.logoImg}
          src={`/img/${platformName[platform]}.png`}
          alt="logo"
        />
        <div className={styles.logoPlatform}>{platform}</div>
      </div>
    </div>
  );
}

export default PlatformHeader;
