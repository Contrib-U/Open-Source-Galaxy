import React from "react";
import ElementOdd from "../ElementOdd";
import ElementEven from "../ElementEven";
import "./OpenApplication.css"; // Import your CSS file

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

function OpenApplication() {
  return (
    <div>
      <h2 className="m-2"> OPEN PROJECTS</h2>
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
        <ElementOdd
          name="GirlScript SOC"
          src={images["element-4.jpg"]}
          link="https://gssoc.girlscript.tech/"
        />
      </div>
    </div>
  );
}

export default OpenApplication;
