import { doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { db } from '../../config';

function Editing() {
  const postObj = useLocation().state;
  console.log(postObj);
  const [newTitle, setNewTitle] = useState(postObj.title);
  const [newPost, setNewPost] = useState(postObj.text);
  const [editing, setEditing] = useState(false);

  const toggleEditing = () => setEditing((prev) => !prev);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // await db.doc(`posts/${postObj.id}`).update({ text: newPost });
    const updateRef = doc(db, 'posts', postObj.id);
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
  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChangeTitle} type="text" value={newTitle} required />
      <input onChange={onChangePost} type="text" value={newPost} required />
      <input type="submit" value="Update" />
      <button type="button" onClick={toggleEditing}>
        Cancel
      </button>
    </form>
  );
}

export default Editing;
