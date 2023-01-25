import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { firebaseAuth } from '../../config';
import { isLogin, LoginState } from '../../model/login';
import styles from './PostHeader.module.css';

function PostHeader() {
  const userId = firebaseAuth.currentUser;
  const userLogin = useRecoilState<LoginState>(isLogin);
  const isLoggin = userLogin[0].isLogin;
  return (
    <>
      <div className={styles.headerWrapper}>
        <div className={styles.nickName}>
          {userId?.uid}
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
        <div className={styles.creator}>아이디</div>
        <div className={styles.date}>날짜</div>
      </div>
    </>
  );
}
export default PostHeader;