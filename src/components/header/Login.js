import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import './logInOutButton.css';

export default function Login(props) {
  function signInHandler() {
    (async function signIn() {
      var provider = new GoogleAuthProvider();
      await signInWithPopup(getAuth(), provider);
      await props.logInOutClickHandler();
    })();
  }

  return (
    <button className='signInOutButton' onClick={signInHandler}>
      Sign In
    </button>
  );
}
