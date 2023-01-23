import cx from 'clsx';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styles from './Nav.module.css';
import NavTab from './NavTab';
import { isLogin, LoginState } from '../../model/login';

const tabMenus: string[] = ['홈', '장르', '플랫폼', '게시판'];

function Nav() {
  // isLogin 상태 콘솔로 찍으면서 확인해보기
  // login
  const userLogin = useRecoilState<LoginState>(isLogin);
  return (
    <div className={styles.navWrapper}>
      <div className={cx(styles.navLogo, styles.cursor)}>Tooooon</div>
      <div className={styles.navTabs}>
        {tabMenus.length > 0
          ? tabMenus.map((tab, index) => <NavTab tab={tab} key={index} />)
          : ''}
      </div>
      <div className={cx(styles.loginTab, styles.cursor)}>
        {userLogin[0].isLogin ? (
          <Link to="/logout">로그아웃</Link>
        ) : (
          <Link to="/login">로그인/회원가입</Link>
        )}
      </div>
    </div>
  );
}

export default Nav;
