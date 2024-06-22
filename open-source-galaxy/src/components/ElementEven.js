import React from "react";
import "./ElementEven.css";
import Email from "./Email";

function ElementEven(props) {
  return (
    <div className="card">
      <img src={props.src} alt="MLH" />
      {/* <div className='row-even'>
            <p>{props.name} </p>
            <a href={props.link}>Link</a>
        </div>

        <Email name = {props.name}/> */}
      <h3>{props.name}</h3>
      <div className="buttons">
        <a href={props.link} className="btn">
          Link
        </a>
        <Email name={props.name} className="btn" />
      </div>
    </div>
  );
}

export default ElementEven;
