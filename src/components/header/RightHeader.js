import { getAuth } from 'firebase/auth';
import { useState } from 'react';
import Login from './Login';
import Logout from './Logout';
import defaultPofile from '../../assets/profile_placeholder.png';
import './rightHeader.css';

export default function RightHeader() {
  const [loggedIn, setLoggedIn] = useState(false);

  function logClickHandler() {
    setLoggedIn((prevState) => !prevState);
  }

  const LOGGED_IN_WIDTH = {
    width: '12em',
  };

  const LOGGED_OUT_WIDTH = {
    width: '10em',
  };

  return (
    <div
      style={loggedIn ? LOGGED_IN_WIDTH : LOGGED_OUT_WIDTH}
      id='rightHeaderContainer'
    >
      <div id='addVideoIconContainer'>
        <svg viewBox='0 0 24 24'>
          <path
            d='M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z'
            fill='#FFFFFF'
          ></path>
        </svg>
      </div>
      {}
      <img
        id='profilePicture'
        src={loggedIn ? getAuth().currentUser.photoURL : defaultPofile}
        alt='profile pic'
      />
      {loggedIn ? (
        <Logout logClickHandler={logClickHandler} />
      ) : (
        <Login logClickHandler={logClickHandler} />
      )}
    </div>
  );
}
