import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { firebaseAuth } from '../../config';
import { isLogin, loginInfo, LoginInfo, LoginState } from '../../model/login';
import styles from './PostHeader.module.css';

function PostHeader() {
  const userLogin = useRecoilState<LoginState>(isLogin);
  const userId = firebaseAuth.currentUser?.email?.split('@')[0];
  const isLoggin = userLogin[0].isLogin;
  return (
    <>
      <div className={styles.headerWrapper}>
        <div className={styles.nickName}>
          {userId}
          님,
        </div>
        <div className={styles.recommend}> 이런 작품은 어때요?</div>
        {isLoggin && (
          <div className={styles.recommendBtn}>
            <Link to="/board/write" className={styles.recommendLink}>
              ＋글 작성
            </Link>
          </div>
        )}
      </div>
      <div className={styles.headerNav}>
        <div className={styles.index}>번호</div>
        <div className={styles.title}>제목</div>
        <div className={styles.creator}>ID</div>
        <div className={styles.date}>날짜</div>
      </div>
    </>
  );
}
export default PostHeader;
