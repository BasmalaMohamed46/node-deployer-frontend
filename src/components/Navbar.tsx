import { Link } from "react-router-dom";

import "../styles/navbar.css";

const NavBar = () => {
  return (
    <header
      id="header"
      className="header d-flex align-items-center sticky-top my-0 shadow-sm"
    >
      <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
        <Link
          to="index.html"
          className="logo d-flex align-items-center me-auto me-xl-0 nav-link"
        >
          <h1 className="sitename">Render </h1>
          <span>Clone</span>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link to="#hero" className="active nav-link">
                Home
                <br />
              </Link>
            </li>
            <li>
              <Link to="#featured-services" className=" nav-link">
                Services
              </Link>
            </li>
            <li>
              <Link to="#about" className=" nav-link">
                About
              </Link>
            </li>

            <li>
              <Link to="#pricing" className=" nav-link">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="#team" className=" nav-link">
                Team
              </Link>
            </li>
            <li>
              <Link to="#contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <Link className="btn-getstarted nav-link" to="index.html#about">
          Get Started
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
