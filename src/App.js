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
  const [inputValue, setInputValue] = useState('');
  // initialize firebase
  initializeApp(firebaseConfig);

  function logInOutClickHandler() {
    setLoggedIn((prevState) => !prevState);
  }
  function inputOnChangeHandler(event) {
    setInputValue(event.target.value);
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
          <input
            onChange={inputOnChangeHandler}
            type='text'
            placeholder='Search'
            value={inputValue}
            id='searchInput'
          ></input>
          {/* only renders a link when theres text in the */}
          {inputValue && (
            <Link to='/searchResults'>
              <button id='searchSubmitButton'>
                <i id='searchMagIcon' className='fas fa-search'></i>
              </button>
            </Link>
          )}
          {!inputValue && (
            <button id='searchSubmitButton'>
              <i id='searchMagIcon' className='fas fa-search'></i>
            </button>
          )}
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
            <Logout logInOutClickHandler={logInOutClickHandler} />
          ) : (
            <Login logInOutClickHandler={logInOutClickHandler} />
          )}
        </div>
      </header>
      <Switch>
        {inputValue && (
          <Route path='/searchResults'>
            <SearchResults />
          </Route>
        )}
        <Route path='/upload'>
          <Upload loggedIn={loggedIn} />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
