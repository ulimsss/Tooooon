import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../config';
import { PostType } from '../../model/post';
import PostList from './PostList';
import styles from './PostListView.module.css';

// const postInitail = {
//   id: '',
//   title: '',
//   text: '',
//   creatorId: '',
//   createdAt: '',
// };

function PostListView() {
  const [contents, setContents] = useState<any>([]);

  const getData = async () => {
    const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
    onSnapshot(
      q,
      (snapshot) =>
        setContents(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
        ),
      // eslint-disable-next-line function-paren-newline
    );
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.listWrapper}>
      {contents?.map((content: PostType, idx: number) => (
        <div className={styles.postListWrapper}>
          <div className={styles.index}>{contents.length - idx}</div>
          <PostList
            key={content.creatorId}
            postObj={content}
            index={contents.length - idx}
          />
        </div>
      ))}
    </div>
  );
}

export default PostListView;
