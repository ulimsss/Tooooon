import { useLocation } from 'react-router';
import { firebaseAuth } from '../../config';
import PostHeader from './PostHeader';
import styles from './Post.module.css';
import PostList, { props } from './PostList';

function Post() {
  const location = useLocation().state;
  const userId = firebaseAuth.currentUser;
  console.log(location.creatorId);
  const isOwner = userId?.uid === location.creatorId;
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <div className={styles.postWrapper}>
      <PostHeader />
      <PostList postObj={location} />
      <div>{location.text}</div>
      {isOwner ? (
        <div>
          <button type="button">수정</button>
        </div>
      ) : null}
    </div>
  );
}

export default Post;
