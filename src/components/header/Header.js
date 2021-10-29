import './header.css';
import youtubeIcon from '../../assets/youtubeIcon.png';
import IconText from './IconText';

export default function Header() {
  return (
    <header>
      <div id='leftHeader'>
        <i id='hamburgerMenuIcon' class='fas fa-bars'></i>
        <div id='youtubeIconContainer'>
          <img id='youtubeIcon' src={youtubeIcon} alt='youtube icon'></img>
          <IconText />
        </div>
      </div>
    </header>
  );
}
