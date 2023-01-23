import { Link } from 'react-router-dom';
import { postType } from '../../model/post';
import styles from './PostList.module.css';

export interface props {
  postObj: postType;
}

function PostList({ postObj }: props) {
  return (
    <div className={styles.postList}>
      <Link to="/board/post" className={styles.title} state={postObj}>
        <div>{postObj.title}</div>
      </Link>
      <div className={styles.creator}>
        Ulimsss
        {/* {postObj.creatorId} */}
      </div>
      <div className={styles.date}>{postObj.createdAt}</div>
    </div>
  );
}

export default PostList;
