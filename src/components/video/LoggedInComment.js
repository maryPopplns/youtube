import { useState } from 'react';
import './loggedInComment.css';
import { getAuth } from 'firebase/auth';
import { doc, updateDoc, arrayUnion, getFirestore } from 'firebase/firestore';

export default function LoggedInComment(props) {
  const [comment, setComment] = useState('');

  const CHANGE_HANDLER = (event) => setComment(event.target.value);

  async function submitHandler(event) {
    const TEXT_AREA = document.getElementById('newComment');
    event.preventDefault();
    if (TEXT_AREA.value) {
      const DOCUMENT = doc(getFirestore(), 'youtube', props.currentVideo.id);
      const { displayName, photoURL } = getAuth().currentUser;
      const NEW_COMMENT = {
        displayName,
        photoURL,
        comment: TEXT_AREA.value,
        timestamp: new Date(),
      };
      await updateDoc(DOCUMENT, {
        comments: arrayUnion(NEW_COMMENT),
      });
      TEXT_AREA.value = '';
    }
  }

  return (
    <form id='commentForm' onSubmit={submitHandler}>
      <textarea
        onChange={CHANGE_HANDLER}
        value={comment}
        id='newComment'
      ></textarea>
      <button id='submitCommentButton'></button>
    </form>
  );
}
