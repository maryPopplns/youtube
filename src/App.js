import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase-config';
import Header from './components/header/Header';
import './App.css';

function App() {
  // initialize firebase
  const APP = initializeApp(firebaseConfig);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
