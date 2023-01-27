import { deleteDoc, doc } from 'firebase/firestore';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { db } from '../../config';
import { PostType } from '../../model/post';
import styles from './Edit.module.css';

function Edit({ postObj }: { postObj: PostType }) {
  const [editing, setEditing] = useState(false);
  const navigation = useNavigate();
  const toggleEditing = () => setEditing(false);

  const onDeleteClick = async () => {
    const ok = window.confirm('삭제하시겠습니까?');
    console.log(ok);
    if (ok) {
      const deleteRef = doc(db, 'posts', postObj.id);
      await deleteDoc(deleteRef);
      navigation('/board');
    }
  };
  return (
    <div>
      <div className={styles.buttons}>
        <button type="button" onClick={onDeleteClick}>
          삭제
        </button>
        <button type="button" onClick={toggleEditing}>
          수정
        </button>
      </div>
    </div>
  );
}

export default Edit;
