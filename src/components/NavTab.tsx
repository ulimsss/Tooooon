import cx from 'clsx';
import styles from './styles/NavTab.module.css';
import { navTabs } from '../constants/navTabs';

interface Props {
  tab: string;
}
function NavTab({ tab }: Props) {
  const locationTab = window.location.href.split('/')[3];

  if (!!navTabs[tab] && locationTab === navTabs[tab]) {
    return (
      <a href={`/${navTabs[tab]}`}>
        <div className={cx(styles.navTab, styles.cursor, styles.checked)}>
          {tab}
        </div>
      </a>
    );
  }
  return (
    <a href={`/${navTabs[tab]}`}>
      <div className={cx(styles.navTab, styles.cursor)}>{tab}</div>
    </a>
  );
}

export default NavTab;
