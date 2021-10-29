import './header.css';
import youtubeIcon from '../../assets/youtubeIcon.png';

export default function Header() {
  return (
    <header>
      <div id='leftHeader'>
        <i id='hamburgerMenuIcon' class='fas fa-bars'></i>
        <div>
          <img id='youtubeIcon' src={youtubeIcon} alt='youtube icon'></img>
        </div>
      </div>
    </header>
  );
}
