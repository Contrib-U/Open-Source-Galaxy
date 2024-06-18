import React from "react";
import ElementOdd from "../ElementOdd";
import ElementEven from "../ElementEven";
import "./ClosedApplications.css";

function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../assets", false, /\.(png|jpe?g)$/)
);

function ClosedApplications() {
  return (
    <div>
      <h2 className="m-2">CLOSED PROJECTS</h2>

      <div className="row">
        <ElementEven
          name="Linux Kernel Mentorship"
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
      </div>
      <div>
        <ElementOdd
          name="Summer of Bitcoin"
          src={images["element-6.png"]}
          link="https://www.summerofbitcoin.org/"
        />
      </div>
    </div>
  );
}

export default ClosedApplications;
