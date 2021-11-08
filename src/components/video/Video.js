import { useState, useEffect } from 'react';
import { doc, onSnapshot, getFirestore } from 'firebase/firestore';
import Comment from './Comment';
import LoggedInComment from './LoggedInComment';
import LoggedOutComment from './LoggedOutComment';
import './video.css';

export default function Video(props) {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    const DOCUMENT = doc(getFirestore(), 'youtube', props.currentVideo.id);
    const unsub = onSnapshot(DOCUMENT, (doc) => {
      setCommentList(doc.data().comments);
    });
    return unsub;
  }, [props]);

  const COMMENTS = commentList.map((comment, index) => (
    <Comment key={index} comment={comment} />
  ));

  return (
    <div id='videoPlayer'>
      <div id='videoContainer'>
        <video
          width='640'
          height='480'
          src={props.currentVideo.videoPath}
          controls
        />
      </div>
      {/* TODO if the user is signed in allow to make comments */}
      {props.loggedIn ? (
        <LoggedInComment currentVideo={props.currentVideo} />
      ) : (
        <LoggedOutComment />
      )}
      <div id='commentContainer'>{COMMENTS}</div>
    </div>
  );
}
