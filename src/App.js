import { getAuth } from 'firebase/auth';
import { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import Login from './components/header/Login';
import Logout from './components/header/Logout';
import YouTubeLogo from './components/header/YouTubeLogo';
import SearchResults from './components/searchResults/SearchResults';
import Upload from './components/upload/Upload';
import Home from './components/home/Home';
import firebaseConfig from './firebase-config';
import defaultPofile from './assets/profile_placeholder.png';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  // initialize firebase
  const APP = initializeApp(firebaseConfig);

  function logClickHandler() {
    setLoggedIn((prevState) => !prevState);
  }

  return (
    <BrowserRouter>
      <header>
        <div id='leftHeader'>
          <i id='hamburgerMenuIcon' className='fas fa-bars'></i>
          <Link to='/'>
            <YouTubeLogo />
          </Link>
        </div>
        <form id='middleHeaderForm' onSubmit={(e) => e.preventDefault()}>
          <input type='text' placeholder='Search' id='searchInput'></input>
          <button id='searchSubmitButton'>
            <Link to='/searchResults'>
              <i id='searchMagIcon' className='fas fa-search'></i>
            </Link>
          </button>
        </form>
        <div id='rightHeaderContainer'>
          <Link to='/upload'>
            <div id='addVideoIconContainer'>
              <svg viewBox='0 0 24 24'>
                <path
                  d='M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z'
                  fill='#FFFFFF'
                ></path>
              </svg>
            </div>
          </Link>
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
      </header>
      <Switch>
        <Route path='/searchResults'>
          <SearchResults />
        </Route>
        <Route path='/upload'>
          <Upload />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
