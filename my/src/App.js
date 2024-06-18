import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/CustomNavbar";
// import Header from "./Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Email";
import ClosedApplication from "./components/ClosedProject/ClosedApplication";
import OpenApplication from "./components/OpenProjects/OpenApplication";
import UpcomingApplication from "./components/UpcomingProject/UpcomingProject";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/services" component={Services} /> */}
          <Route path="/closed-applications" element={<ClosedApplication />} />
          <Route path="/open-applications" element={<OpenApplication />} />
          <Route
            path="/upcoming-applications"
            element={<UpcomingApplication />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
