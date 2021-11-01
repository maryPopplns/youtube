import './upload.css';
import LoggedInUpload from './LoggedInUpload';
import LoggedOutUpload from './LoggedOutUpload';

export default function Upload(props) {
  if (props.loggedIn) {
    return <LoggedInUpload />;
  } else {
    return <LoggedOutUpload />;
  }
}
