import './header.css';
import LeftHeader from './LeftHeader';
import MiddleHeader from './MiddleHeader';

export default function Header() {
  return (
    <header>
      <LeftHeader />
      <MiddleHeader />
    </header>
  );
}
