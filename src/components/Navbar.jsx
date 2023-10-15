import '../styles/Navbar.scss';
import { Outlet } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar(props) {
  return (
    <>
      <header className="nav__header">
        <nav className="nav__nav">
          <div className="nav__left">
            <Logo />
          </div>
          <div className="nav__right">
            {!props.sID ? '' : <span className="nav__sesh-id"><span>Session ID:</span> {props.sID}</span>}
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  )
}