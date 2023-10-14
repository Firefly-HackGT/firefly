import '../styles/Navbar.scss';
import { Outlet } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
  return (
    <>
      <header className="nav__header">
        <nav className="nav__nav">
          <div className="nav__left">
            <Logo />
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  )
}