import React, { useContext } from "react";
import { Link as RouterLink, useNavigate, useLocation, Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";
// import logo from "../Images/Logo.jpeg";
import logo1 from "../Images/logo4.jpeg";
import "./NavBar.css";
function NavBar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <Navbar expand="lg" style={{ backgroundColor: "#ffffffff" }} sticky="top" className="nav-top">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand as={RouterLink} to="/">
          {/* <img src={logo} alt="Camper Logo" width="100px" /> */}
          <img src={logo1} alt="CLeaningService Logo" width="100px" />

        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">

            <Nav.Link
              as={isHomePage ? ScrollLink : RouterLink}
              to={isHomePage ? "home" : "/"}
              smooth={true} duration={500} offset={-70}
              className="px-2"
            >
              <Button  className="button">HOME</Button>
            </Nav.Link>

            <Nav.Link
              as={isHomePage ? ScrollLink : RouterLink}
              to={isHomePage ? "contact" : "/"}
              smooth={true} duration={500} offset={-70}
              className="px-2"
            >
              <Button  className="button">CONTACT</Button>
            </Nav.Link>

            <Nav.Link as={Link} to="/services" className="px-2">
              <Button  className="button">SERVICES</Button>
            </Nav.Link>

            <Nav.Link
              as={isHomePage ? ScrollLink : RouterLink}
              to={isHomePage ? "about" : "/"}
              smooth={true} duration={500} offset={-70}
              className="px-2"
            >
              <Button className="button">ABOUT</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;