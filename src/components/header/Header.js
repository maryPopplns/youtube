import './header.css';
import LeftHeader from './LeftHeader';
import MiddleHeader from './MiddleHeader';
import RightHeader from './RightHeader';

export default function Header() {
  return (
    <header>
      <LeftHeader />
      <MiddleHeader />
      <RightHeader />
    </header>
  );
}
