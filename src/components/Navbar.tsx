import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import ReactSVG from "../assets/react.svg";

const NavBar = () => {
  return (
    <Navbar
      bg="white"
      data-bs-theme="light"
      className="border-bottom border-black border-2"
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="me-5">
          <img
            alt=""
            src={ReactSVG}
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
          />
          React Bootstrap
        </Navbar.Brand>
        <Nav className="me-auto fs-5">
          <Nav.Link as={Link} to="/product">
            Product
          </Nav.Link>
          <Nav.Link as={Link} to="/pricing">
            Pricing
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
        </Nav>
        <Nav className="fs-5">
          <Nav.Link as={Link} to="/login" className="me-3">
            Login
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/signup"
            className="me-3 bg-black text-bg-dark"
          >
            SignUp
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
