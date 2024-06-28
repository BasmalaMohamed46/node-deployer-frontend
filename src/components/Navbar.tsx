import { FC } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import ProfileState from "./ProfileState";

interface NavProps {
  heroRef: React.RefObject<HTMLElement>;
  aboutRef: React.RefObject<HTMLElement>;
  pricingRef: React.RefObject<HTMLElement>;
  teamRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
}

const NavBar:FC<NavProps>= ({ heroRef, aboutRef, pricingRef, teamRef, contactRef }) => {
  const handleScroll = (ref:React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header
      id="header"
      className="header d-flex align-items-center sticky-top my-0 shadow-sm"
    >
      <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
        <NavLink
          to="/"
          className="logo d-flex align-items-center me-auto me-xl-0 nav-link"
        >
          <h1 className="sitename">Render </h1>
          <span>Clone</span>
        </NavLink>

        <nav id="navmenu" className="navmenu">
          <ul className="d-flex">
            <li>
              <NavLink
                onClick={() => handleScroll(heroRef)}
                exact
                to="/hero"
                activeClassName="active"
                className="nav-link"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services" // To the Service Page
                activeClassName="active"
                className="nav-link"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => handleScroll(aboutRef)}
                to="/about"
                activeClassName="active"
                className="nav-link"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => handleScroll(pricingRef)}
                to="/pricing"
                activeClassName="active"
                className="nav-link"
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink 
                onClick={() => handleScroll(teamRef)}
                to="/team" activeClassName="active" className="nav-link">
                Team
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => handleScroll(contactRef)}
                to="/contact"
                activeClassName="active"
                className="nav-link"
              >
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