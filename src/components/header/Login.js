import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export default function Login(props) {
  function signInHandler() {
    (async function signIn() {
      var provider = new GoogleAuthProvider();
      await signInWithPopup(getAuth(), provider);
      await props.logClickHandler();
    })();
  }

  return <button onClick={signInHandler}>Sign In</button>;
}
