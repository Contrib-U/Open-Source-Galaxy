// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// function Navbar() {
//   const [dropdownVisible, setDropdownVisible] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownVisible(!dropdownVisible);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <h1>Open Source Galaxy</h1>
//       </div>
//       <ul className="navbar-links">
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         {/* <li>
//           <Link to="/services">Services</Link>
//         </li> */}
//         <li>
//           <Link to="/contact">Contact</Link>
//         </li>
//         <li className="dropdown">
//           <button className="dropbtn" onClick={toggleDropdown}>
//             Opportunities
//           </button>
//           {dropdownVisible && (
//             <div className="dropdown-content">
//               <Link to="/open-applications">Open Applications</Link>
//               <Link to="/upcoming-applications">Upcoming Applications</Link>
//               <Link to="/closed-applications">Closed Applications</Link>
//             </div>
//           )}
//         </li>
//       </ul>
//       <div className="navbar-auth">
//         <button className="login-btn">Login</button>
//         <button className="signup-btn">Sign Up</button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function CustomNavbar() {
  return (
    <Navbar expand="lg" fixed="top" className="bg-body-tertiary">
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
              <NavDropdown.Item as={Link} to="/open-applications">
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
