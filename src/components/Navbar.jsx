import '../styles/Navbar.scss';
import { useNavigate, Outlet } from 'react-router-dom';
// import Logo from './Logo';
import logo from '../assets/logo.svg';

export default function Navbar(props) {
  const navigate = useNavigate();

  return (
    <>
      <header className="nav__header">
        <nav className="nav__nav">
          <div className="nav__left">
              <img
                onClick={() => navigate('/')}
                id="nav_logo"
                src={logo}
                style={{ height: 100, width: 100 }}
                alt="website logo"
              />
          </div>
          <div className="nav__right">
            {!props.sID ? '' : <span className="nav__sesh-id"><span>Session ID:</span> {props.sID}</span>}
            {!props.sName ? '' : <span className="nav__sesh-id"><span>User:</span> {props.sName}</span>}
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  )
}