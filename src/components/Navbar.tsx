import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';
import ProfileState from './ProfileState';

const NavBar = () => {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top my-0 shadow-sm">
      <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
        <NavLink to="/" className="logo d-flex align-items-center me-auto me-xl-0 nav-link">
          <img src="/images/logo.jpg" alt="weBuild Logo"/>
        </NavLink>

        <nav id="navmenu" className="navmenu">
          <ul className="d-flex">
            <li>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard" 
                className="nav-link"
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Containers"
                className="nav-link"
              >
                Containers
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/pricing" className="nav-link">
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink to="/team" className="nav-link">
                Team
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
        <div id="navmenu" className="navmenu me-5 pe-5">
          <ProfileState />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
