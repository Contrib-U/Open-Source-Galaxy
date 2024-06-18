import React from "react";
import "./ElementEven.css";
import Email from "./Contact/Email";

function ElementEven(props) {
  return (
    <div className="container-even">
      <div className="col-even">
        <img src={props.src} alt="MLH" />
        <div className="row-even">
          <p>{props.name} </p>
          <a href={props.link}>Link</a>
        </div>

        <Email name={props.name} />
      </div>
    </div>
  );
}

export default ElementEven;
