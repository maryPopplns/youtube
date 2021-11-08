import './loggedInComment.css';
import { useState, useEffect } from 'react';
import { APP } from '../../App.js';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';

export default function LoggedInComment(props) {
  const [comment, setComment] = useState('');

  const DB = getFirestore(APP);

  function commentChangeHandler(event) {
    setComment(event.target.value);
  }
  useEffect(() => {
    const USER = getAuth().currentUser;
    console.log(USER);
    // const TEXT = event.target.value;
    // console.log(TEXT);
  }, []);

  async function submitHandler(event) {
    event.preventDefault();
    // const DOCUMENT = doc(DB, 'youtube', props.currentVideo.id);
    // await updateDoc(DOCUMENT, {
    //   comments: arrayUnion(),
    // });
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
