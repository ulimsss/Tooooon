import cx from 'clsx';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styles from './Nav.module.css';
import NavTab from './NavTab';
import { isLogin, LoginState } from '../../model/login';
import Search from '../Search/SearchIcon';

const tabMenus: string[] = ['홈', '장르', '플랫폼', '게시판'];

function Nav() {
  const userLogin = useRecoilState<LoginState>(isLogin);
  return (
    <div className={styles.navWrapper}>
      <Link to="/home" className={cx(styles.navLogo, styles.cursor)}>
        <img src="/vite.ico" alt="logo" />
      </Link>
      <div className={styles.navTabs}>
        {tabMenus.length > 0
          ? tabMenus.map((tab, index) => <NavTab tab={tab} key={index} />)
          : ''}
      </div>
      <div className={cx(styles.loginTab)}>
        <Link to="/search" className={cx(styles.searchWrapper, styles.cursor)}>
          <Search />
        </Link>
        {userLogin[0].isLogin ? (
          <Link to="/logout" className={styles.cursor}>
            로그아웃
          </Link>
        ) : (
          <Link to="/login" className={styles.cursor}>
            로그인/회원가입
          </Link>
        )}
      </div>
    </div>
  );
}

export default Nav;
