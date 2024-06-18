import React from 'react'
import './Header.css'
import SearchBar from './SearchBar';
import Authentication from './Authentication';


function Header() {
  return (
    <div className='header'>
        <h1>
            Open Source Galaxy
        </h1>
        <SearchBar/>
        <Authentication />
    </div>
  )
}

export default Header