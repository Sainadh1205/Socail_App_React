import React from "react";
import Icon from "./Assets/SocialApp.jpg";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom"

function NavbarComponent() {
  return (
    <>
      <Navbar
        style={{
          position: "fixed",
          zIndex: "1000",
          top: "0",
          left: "0",  
          width: "100%",
        }}
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand
            className="nav-brand"
            style={{
              border: "1.5px solid white",
              borderRadius: "5px",
              padding: "4px",
            }}
            as={NavLink} to="/"
          >
            <img
              className="d-inline-block align-top"
              width={30}
              height={30}
              src={Icon}
              style={{ marginRight: "10px" }}
              alt="Brand"
            />
            SocialApp
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Posts</Nav.Link>
              <Nav.Link as={NavLink} to="/about">About</Nav.Link>
              <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
              
            </Nav>
            <Nav>
              <Nav.Link as={NavLink} to="/">SignUp</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                LogIn
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
