import { addDoc, collection, onSnapshot, query } from 'firebase/firestore';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { db, firebaseAuth } from '../../config';
import { loginInfo, LoginInfo } from '../../model/login';
import styles from './Write.module.css';

function Write() {
  const [title, setTitle] = useState('');
  const [post, setPost] = useState('');
  const userId = firebaseAuth.currentUser?.uid;
  const userInfo = useRecoilState<LoginInfo>(loginInfo);
  const navigation = useNavigate();

  const q = query(collection(db, 'posts'));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((doc) => {
      posts.push(doc.data().name);
    });
  });

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await addDoc(collection(db, 'posts'), {
        title: title,
        text: post,
        createdAt: new Date().toLocaleString().split(',')[0],
        creatorId: userId,
        userId: userInfo[0].userId,
      });
      setTitle('');
      setPost('');
      navigation('/board');
    } catch (err) {
      console.log(err);
    }
  };
  const onChangePost = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setPost(value);
  };
  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setTitle(value);
  };

  return (
    <div className={styles.writeWrapper}>
      <div className={styles.writeHeader}>
        <div className={styles.nickName}>
          {userInfo[0].userId}
          님,
        </div>
        <div className={styles.recommend}> 작품을 추천해주세요. </div>
      </div>
      <div className={styles.writeBody}>
        <form onSubmit={onSubmit}>
          <input
            id="title"
            value={title}
            onChange={onChangeTitle}
            type="text"
            placeholder="제목을 입력하세요"
            maxLength={40}
          />
          <label className={styles.inputTitleLabel} htmlFor="title">
            제목
          </label>
          <input
            id="text"
            value={post}
            className={styles.text}
            onChange={onChangePost}
            type="text"
            placeholder="게시글을 입력하세요"
          />
          <label className={styles.inputTextLabel} htmlFor="text">
            게시글
          </label>
          <div className={styles.buttons}>
            <Link className={styles.cancelBtn} to="/board">
              취소
            </Link>
            <button type="submit">작성하기</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Write;
