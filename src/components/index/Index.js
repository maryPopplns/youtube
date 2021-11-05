import { useEffect } from 'react';
import Home from '../home/Home';
import { Link, Routes, Route } from 'react-router-dom';
import './index.css';

export default function Index() {
  useEffect(() => {
    const BUTTON = document.getElementById('invisibleButton');
    BUTTON.click();
  }, []);

  return (
    <main>
      <Link to='/home'>
        <button id='invisibleButton'></button>
      </Link>
      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>
    </main>
  );
}
