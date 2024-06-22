import React from "react";
// import element1 from '../assets/element-1.jpg'
import "./ElementOdd.css";
import Email from "./Email";

function Element(props) {
  return (
    <div className="card-odd">
      <img src={props.src} alt="MLH" />
      {/* <div className='row-even'>
            <p>{props.name} </p>
            <a href={props.link}>Link</a>
        </div>

        <Email name = {props.name}/> */}
      <h3>{props.name}</h3>
      <div className="buttons-odd">
        <a href={props.link} className="btn-odd">
          Link
        </a>
        <Email name={props.name} className="btn-odd" />
      </div>
    </div>
  );
}

export default Element;
