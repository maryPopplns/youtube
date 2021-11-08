import './loggedInComment.css';
import { formatDistanceToNow } from 'date-fns';
import { useState, useEffect } from 'react';
import { APP } from '../../App.js';
import { getAuth } from 'firebase/auth';
import {
  doc,
  updateDoc,
  arrayUnion,
  serverTimestamp,
  getFirestore,
} from 'firebase/firestore';

export default function LoggedInComment(props) {
  const [comment, setComment] = useState('');

  function commentChangeHandler(event) {
    setComment(event.target.value);
  }

  useEffect(() => {
    // console.log(props.currentVideo.id);
    // console.log(DOCUMENT);
  }, []);

  // const UPLOAD_DATE = props.currentVideo.timestamp.toDate();
  // const DIFFERENCE = formatDistanceToNow(UPLOAD_DATE);
  async function submitHandler(event) {
    event.preventDefault();
    if (comment) {
      const DOCUMENT = doc(getFirestore(), 'youtube', props.currentVideo.id);
      const USER = getAuth().currentUser.displayName;
      const NEW_COMMENT = {
        USER,
        comment,
        timestamp: new Date(),
      };
      await updateDoc(DOCUMENT, {
        comments: arrayUnion(NEW_COMMENT),
      });
      await setComment('');
    }
  }

  return (
    <form id='commentForm' onSubmit={submitHandler}>
      <textarea
        value={comment}
        onChange={commentChangeHandler}
        id='newComment'
      ></textarea>
      <button id='submitCommentButton'></button>
    </form>
  );
}
