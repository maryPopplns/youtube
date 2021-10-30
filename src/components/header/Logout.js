import { getAuth, signOut } from 'firebase/auth';
import './signInOutButton.css';

export default function Logout(props) {
  function logOutHandler() {
    signOut(getAuth());
    props.logClickHandler();
  }

  return (
    <button className='signInOutButton' onClick={logOutHandler}>
      Sign Out
    </button>
  );
}
