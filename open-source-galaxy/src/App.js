import React from "react";
import "./App.css";
import ElementOdd from "./components/ElementOdd";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ElementEven from "./components/ElementEven";
import { ThemeProvider } from "./components/ThemeContext";
import CustomNavbar from "./components/Navbar/CustomNavbar";
import Blogs from "./components/Blogs";
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer/Footer";
// import SearchBar from './components/SearchBar';
// import './assets/';

function importAll(r) {
  let images = {};
  // eslint-disable-next-line
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(require.context("./assets", false, /\.(png|jpe?g)$/));

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider>
          {/* <Header /> */}
          <CustomNavbar />
        </ThemeProvider>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/closed-applications" element={<ClosedApplications />} />
          <Route path="/open-applications" element={<OpenApplications />} />
          <Route
            path="/upcoming-applications"
            element={<UpcomingApplications />}
          /> */}
          <Route path="/blogs" element={<Blogs />} />
          {/* <Route path="/log-in" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} /> */}
        </Routes>

        <div className="container">
          <ElementOdd
            name="Google Summer Of Code"
            src={images["element_1.jpg"]}
            link="https://summerofcode.withgoogle.com/"
          />
          <ElementEven
            name="MLH Fellowship"
            src={images["element-2.png"]}
            link="https://shorturl.at/cRVY7"
          />
          <ElementOdd
            name="Google Summer Of Docs"
            src={images["element-3.png"]}
            link="https://developers.google.com/season-of-docs"
          />
          <ElementEven
            name="Linux Kernal Mentorship"
            src={images["element-7.png"]}
            link="https://wiki.linuxfoundation.org/lkmp"
          />

          <ElementOdd
            name="Code Heat"
            src={images["element-8.png"]}
            link="https://codeheat.org/"
          />
          <ElementEven
            name="Hacktober Fest"
            src={images["element-9.jpg"]}
            link="https://hacktoberfest.com/"
          />
          <ElementOdd
            name="GirlScript SOC"
            src={images["element-4.jpg"]}
            link="https://gssoc.girlscript.tech/"
          />
          <ElementEven
            name="Outreachy"
            src={images["element-5.png"]}
            link="https://www.outreachy.org/"
          />

          <ElementOdd
            name="Summer of BitCoin"
            src={images["element-6.png"]}
            link="https://www.summerofbitcoin.org/"
          />
          <ElementOdd
            name="Hyperledger Mentorship Program"
            src={images["element-10.png"]}
            link="https://wiki.hyperledger.org/display/INTERN"
          />
          <ElementEven
            name="Reinforcement Learning Open Source Fest"
            src={images["element-11.jpg"]}
            link="https://www.microsoft.com/en-us/research/academic-program/rl-open-source-fest/"
          />
          <ElementOdd
            name="FOSSASIA Internship Program"
            src={images["element-12.png"]}
            link="https://fossasiataipei.github.io/fossasia-cht/apply/"
          />

          <ElementOdd
            name="Summer of Nix"
            src={images["element-13.png"]}
            link="https://github.com/ngi-nix/summer-of-nix"
          />
          <ElementEven
            name="24 Pull Requests"
            src={images["element-14.png"]}
            link="https://24pullrequests.com/"
          />
          <ElementOdd
            name="GitHub Octernship Program"
            src={images["element-15.png"]}
            link="https://github.com/education/Octernships"
          />
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

