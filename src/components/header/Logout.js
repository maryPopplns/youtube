import { getAuth, signOut } from 'firebase/auth';
import './logInOutButton.css';

export default function Logout(props) {
  function logOutHandler() {
    signOut(getAuth());
    props.logInOutClickHandler();
  }

  return (
    <button className='signInOutButton' onClick={logOutHandler}>
      Sign Out
    </button>
  );
}
