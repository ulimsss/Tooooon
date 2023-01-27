import { useLocation, useNavigate } from 'react-router';
import { useState } from 'react';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db, firebaseAuth } from '../../config';
import PostHeader from './PostHeader';
import styles from './Post.module.css';
import PostList from './PostList';

function Post() {
  const location = useLocation().state;
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(location.postObj.title);
  const [newPost, setNewPost] = useState(location.postObj.text);
  const toggleEditing = () => setEditing((prev) => !prev);
  const navigation = useNavigate();

  const userId = firebaseAuth.currentUser;
  const isOwner = location.postObj.creatorId === userId?.uid;
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // await db.doc(`posts/${location.postObj.id}`).update({ text: newPost });
    const updateRef = doc(db, 'posts', location.postObj.id);
    await updateDoc(updateRef, { title: newTitle, text: newPost });
    setEditing(false);
  };
  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setNewTitle(value);
  };
  const onChangePost = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setNewPost(value);
  };
  const onDeleteClick = async () => {
    const ok = window.confirm('삭제하시겠습니까?');

    if (ok) {
      const deleteRef = doc(db, 'posts', location.postObj.id);
      await deleteDoc(deleteRef);
      navigation('/board');
    }
  };

  return (
    <div>
      <div className={styles.postWrapper}>
        <PostHeader />
        {editing ? (
          <div className={styles.editWrapper}>
            <form onSubmit={onSubmit}>
              <input
                id="title"
                onChange={onChangeTitle}
                type="text"
                value={newTitle}
                required
                className={styles.title}
              />
              <label className={styles.inputTitleLabel} htmlFor="title">
                제목
              </label>
              <input
                id="text"
                onChange={onChangePost}
                type="text"
                value={newPost}
                required
                className={styles.text}
              />
              <label className={styles.inputTextLabel} htmlFor="text">
                게시글
              </label>
              <div className={styles.buttons}>
                <button type="submit">수정</button>
                <button type="button" onClick={toggleEditing}>
                  취소
                </button>
              </div>
            </form>
          </div>
        ) : (
          <>
            <div className={styles.contentWrapper}>
              <div className={styles.index}>{location.index}</div>
              <div className={styles.postList}>
                <div className={styles.title}>{newTitle}</div>

                <div className={styles.creator}>{location.postObj.userId}</div>
                <div className={styles.date}>{location.postObj.createdAt}</div>
              </div>
            </div>
            <div className={styles.text}>{newPost}</div>
            {isOwner && (
              <div className={styles.buttons}>
                <button type="button" onClick={onDeleteClick}>
                  삭제
                </button>
                <button type="button" onClick={toggleEditing}>
                  수정
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Post;
