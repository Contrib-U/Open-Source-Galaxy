import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function CustomNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Open Source Galaxy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <NavDropdown title="Opportunities" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/open-applications">
                Open Applications
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/upcoming-applications">
                Upcoming Applications
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/closed-applications">
                Closed Applications
              </NavDropdown.Item>
              {/* Add more dropdown items as needed */}
            </NavDropdown>
          </Nav>
          <Button variant="outline-primary">Log In</Button>{" "}
          <Button className="mx-2" variant="outline-success">
            Sign-Up
          </Button>{" "}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
