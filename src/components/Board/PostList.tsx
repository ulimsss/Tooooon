import { Link } from 'react-router-dom';
import { PostType } from '../../model/post';
import styles from './PostList.module.css';

export interface props {
  postObj: PostType;
  // eslint-disable-next-line react/require-default-props
  index?: number;
}

function PostList({ postObj, index }: props) {
  return (
    <div className={styles.postList}>
      <Link
        to="/board/post"
        className={styles.title}
        state={{ postObj: postObj, index: index }}
      >
        <div>{postObj.title}</div>
      </Link>
      <div className={styles.creator}>{postObj.userId}</div>
      <div className={styles.date}>{postObj.createdAt}</div>
    </div>
  );
}

export default PostList;
