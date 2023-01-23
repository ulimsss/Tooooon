import { firebaseAuth } from '../../config';
import styles from './PostHeader.module.css';

function PostHeader() {
  const userId = firebaseAuth.currentUser;

  return (
    <>
      <div className={styles.headerWrapper}>
        <div className={styles.nickName}>
          {userId?.uid}
          님,
        </div>
        <div className={styles.recommend}> 이런 작품은 어때요?</div>
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
