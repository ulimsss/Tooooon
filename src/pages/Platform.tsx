import PlatformHeader from '../components/Platform/PlatformHeader';
import PlatformList from '../components/Platform/PlatformList';
import { PLATFORMARR } from '../constants/platform';
import styles from './styles/Platform.module.css';

function Platform() {
  return (
    <>
      {PLATFORMARR.map((platform) => (
        <>
          <PlatformHeader platform={platform} />
          <div className={styles.webtoonWrapper}>
            <PlatformList platformName={platform} />
          </div>
        </>
      ))}
    </>
  );
}

export default Platform;
