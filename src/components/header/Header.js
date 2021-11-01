import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import YouTubeLogo from './YouTubeLogo';
import './header.css';

export default function Header() {
  return (
    <BrowserRouter>
      <header>
        <div id='leftHeader'>
          <i id='hamburgerMenuIcon' className='fas fa-bars'></i>
          <Link to='/home'>
            <YouTubeLogo />
          </Link>
        </div>
      </header>
    </BrowserRouter>
  );
}
