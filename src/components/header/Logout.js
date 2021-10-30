import { getAuth, signOut } from 'firebase/auth';

export default function Logout(props) {
  function logOutHandler() {
    signOut(getAuth());
    props.logClickHandler();
  }

  return <button onClick={logOutHandler}>Sign Out</button>;
}
