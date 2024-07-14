import React from 'react';
import './ElementEven.css';
import Email from './Email';

function ElementEven(props) {
  return (
    <div class='card-even'>
      <img src={props.src} alt={props.name} />
      <h3>{props.name}</h3>
      <div class="buttons-even">
        {/* <a href={props.link} class="btn-even">Link</a> */}
        <a href={props.link} className="btn-even" target="_blank" rel="noopener noreferrer">
          Link
        </a>
        <Email name={props.name} class="btn-odd" />
      </div>
    </div>
  );
}

export default ElementEven;




