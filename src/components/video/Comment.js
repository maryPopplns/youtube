import { formatDistanceToNow } from 'date-fns';
import './comment.css';

export default function Comment(props) {
  const UPLOAD_DATE = props.comment.timestamp.toDate();
  const DIFFERENCE = formatDistanceToNow(UPLOAD_DATE);

  return (
    <div className='individualComment'>
      <div>{props.comment.comment}</div>
      <div>{props.comment.displayName}</div>
      <div>{DIFFERENCE}</div>
      {/* <img src={props.comment.photoURL} alt='profile pic' /> */}
    </div>
  );
}
