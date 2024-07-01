import React from 'react'
// import element1 from '../assets/element-1.jpg'
import './ElementOdd.css'
import Email from './Email';

function Element(props) {
  

 
  return (
    <div class='card-odd'>
        <img src={props.src} alt='MLH' />
        <h3>{props.name}</h3>
        <div class="buttons-odd">
            <a href={props.link} class="btn-odd">Link</a>
            <Email name={props.name} class="btn-odd" />
        </div>  
    </div>
  )
}

export default Element