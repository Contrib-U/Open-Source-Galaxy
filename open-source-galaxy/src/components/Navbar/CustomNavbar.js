import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";

export default function CustomNavbar() {
  return (
    <Navbar expand="lg" className="navbar-custom">
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
            </NavDropdown>
          </Nav>
          <Form className="d-flex mb-3 mb-lg-0">
            <Row className="align-items-center">
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="sm-2"
                />
              </Col>
              <Col xs="auto">
                <Button className="button">Submit</Button>
              </Col>
            </Row>
          </Form>
          <Button variant="outline-primary" className="mx-2">
            Log In
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
