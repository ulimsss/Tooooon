import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../config';
import { PostType } from '../../model/post';
import PostList from './PostList';
import styles from './PostListView.module.css';
import Pagination from './Pagination';

// const postInitail = {
//   id: '',
//   title: '',
//   text: '',
//   creatorId: '',
//   createdAt: '',
// };
const MAX_PAGE = 5;

function PostListView() {
  const [contents, setContents] = useState<any>([]);
  const [limit, setLimit] = useState(MAX_PAGE);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const totalPage = contents.length;

  const getData = async () => {
    const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
    const snap = onSnapshot(
      q,
      (snapshot) =>
        setContents(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
        ),
      // eslint-disable-next-line function-paren-newline
    );
  };
  const q = query(collection(db, 'posts'));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((docu) => {
      posts.push(docu.data().name);
    });
  });

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.listWrapper}>
      {contents
        ?.slice(offset, offset + limit)
        .map((content: PostType, idx: number) => (
          <div className={styles.postListWrapper}>
            <div className={styles.index}>
              {contents.length - (offset + idx)}
            </div>
            <PostList
              key={content.creatorId}
              postObj={content}
              index={contents.length - idx}
            />
          </div>
        ))}
      <div className={styles.paginationWrapper}>
        <Pagination
          total={totalPage}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
}

export default PostListView;
