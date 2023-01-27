import cx from 'clsx';
import { Link } from 'react-router-dom';
import React from 'react';
import styles from './NavTab.module.css';
import { navTabs } from '../../constants/navTabs';

interface Props {
  tab: string;
}
function NavTab({ tab }: Props) {
  const locationTab = window.location.href.split('/')[3];

  if (!!navTabs[tab] && locationTab === navTabs[tab]) {
    return (
      <Link to={`/${navTabs[tab]}`}>
        <div className={cx(styles.navTab, styles.cursor, styles.checked)}>
          {tab}
        </div>
      </Link>
    );
  }
  return (
    <Link to={`/${navTabs[tab]}`}>
      <div className={cx(styles.navTab, styles.cursor)}>{tab}</div>
    </Link>
  );
}

export default NavTab;
