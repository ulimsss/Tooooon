import { PLATFORMARR } from '../../constants/platform';
import styles from './Platform.module.css';
import PlatformHeader from './PlatformHeader';
import PlatformList from './PlatformList';

function Platfrom() {
  return (
    <>
      <PlatformHeader />
      <div className={styles.webtoonWrapper}>
        {PLATFORMARR.map((platform) => (
          <PlatformList platformName={platform} />
        ))}
      </div>
    </>
  );
}

export default Platfrom;
