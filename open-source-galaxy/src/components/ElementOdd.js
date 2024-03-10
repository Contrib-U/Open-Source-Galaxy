import React from 'react'
// import element1 from '../assets/element-1.jpg'
import './ElementOdd.css'
import Email from './Email';

function Element(props) {
  

 
  return (
    <div className='container-odd'>
        <div className='col-odd'>
            <img src={props.src} alt='GSOC' />
            <div className='row-odd'>
                <p>{props.name} </p>
                <a href={props.link}>Link</a>
            </div>
            {/* <button onClick={changeMessage} className='animation-odd'>
              {message}
            </button> */}
            <Email name = {props.name}/>
        </div>
        
    </div>
  )
}

export default Element