import {
  collection,
  onSnapshot,
  orderBy,
  query,
  QueryDocumentSnapshot,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../config';
import { postType } from '../../model/post';
import PostList from './PostList';
import styles from './PostListView.module.css';

function PostListView() {
  const [contents, setContents] = useState<any>([
    {
      id: '',
      title: '',
      text: '',
      creatorId: '',
      createdAt: '',
    },
  ]);

  const getData = async () => {
    const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
    onSnapshot(
      q,
      (snapshot) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        setContents(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
        ),
      // eslint-disable-next-line function-paren-newline
    );
  };

  const q = query(collection(db, 'posts'));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((snapshot) => {
      posts.push(snapshot.data().name);
    });
  });

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.listWrapper}>
      {contents?.map((content: postType, idx: number) => (
        <div className={styles.postListWrapper}>
          <div className={styles.index}>{contents.length - idx}</div>
          <PostList key={content.creatorId} postObj={content} />
        </div>
      ))}
    </div>
  );
}

export default PostListView;
