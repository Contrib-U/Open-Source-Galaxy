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
import Login from "../Login";
import "./Navbar.css";
import DarkAnim from "../DarkAnim";
import ThemeToggle from "../ThemeToggle";

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

            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/open-projects">
                Open Projects
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/upcoming-projects">
                Upcoming Projects
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/closed-projects">
                Closed Projects
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/blogs">
              Blogs
            </Nav.Link>

            {/* <DarkAnim /> */}
          </Nav>
          <Form className="d-flex mb-3 mb-lg-0">
            <Row className="align-items-center gx-2">
              <Col>
                <Form.Control type="text" placeholder="Search" />
              </Col>
              <Col>
                <Button className="button ">Submit</Button>
              </Col>
            </Row>
          </Form>

          <Login />
          <ThemeToggle className="fixed" />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
