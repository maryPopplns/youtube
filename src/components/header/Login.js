import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export default function Login(props) {
  function signInHandler() {
    (async function signIn() {
      // Sign in Firebase using popup auth and Google as the identity provider.
      var provider = new GoogleAuthProvider();
      await signInWithPopup(getAuth(), provider);
    })();
    props.logClickHandler();
  }

  return <button onClick={signInHandler}>Sign In</button>;
}
