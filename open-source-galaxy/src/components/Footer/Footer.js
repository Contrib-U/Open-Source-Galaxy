import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="p-4 footer-custom">
      <Container fluid>
        <Row className="mb-3">
          <Col md={6} className="mb-md-0 mb-4">
            <h4>Open Source Galaxy</h4>
            <p>
              A platform where users can stay up-to-date with upcoming open
              source projects
            </p>
          </Col>
          <Col md={3} className="mb-md-0 mb-4">
            <h3>Links</h3>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h3>Connect</h3>
            <ul className="list-unstyled d-flex">
              <li className="me-4 ">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size={10} />
                </a>
              </li>
              <li className="me-4">
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={10} />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/aiscribe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={10} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <p className="text-muted ">
              &copy; {new Date().getFullYear()} Open Source Galaxy. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
