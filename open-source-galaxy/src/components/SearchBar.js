import React from 'react';
import './SearchBar.css';
import searchIcon from '../assets/search-icon.png'

function SearchBar() {
  return (
    <div className='search-bar'>
      
        <input type='text' placeholder='Search..'/>
        <button className='search-icon'>
            <img src={searchIcon}/>
        </button>
      
    </div>
  )
}

export default SearchBar
