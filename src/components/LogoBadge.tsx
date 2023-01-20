import { Link } from 'react-router-dom';
import {
  platformName,
  platformURL as platformsURL,
} from '../constants/carousel';
import styles from './styles/LogoBadge.module.css';

interface Props {
  platform: string;
}

function LogoBadge({ platform }: Props): JSX.Element {
  let logoSRC = '';
  let platformURL = '';
  if (platformName[platform]) {
    logoSRC = `/img/${platformName[platform]}.png`;
    platformURL = `${platformsURL[platform]}`;
  }
  return (
    <div className={styles.logoWrapper}>
      <button
        type="button"
        onClick={() => {
          window.open(platformURL, '_blank');
        }}
      >
        <img className={styles.logoImg} src={logoSRC} alt={platform} />
        <p className={styles.logoPlatform}>{platform}</p>
      </button>
    </div>
  );
}

export default LogoBadge;
