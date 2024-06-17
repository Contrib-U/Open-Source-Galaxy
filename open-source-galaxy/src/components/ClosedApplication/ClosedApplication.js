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
      <h2>Closed Applications</h2>
      <div className="row">
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
      </div>
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
      <div className="row">
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
          name="Summer of Bitcoin"
          src={images["element-6.png"]}
          link="https://www.summerofbitcoin.org/"
        />
      </div>
    </div>
  );
}

export default ClosedApplications;
