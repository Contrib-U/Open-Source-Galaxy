import React from 'react';
import './SearchBar.css';
import searchIcon from '../assets/search-icon.png'
import searchIcon2 from '../assets/icons8-search-50.png'

function SearchBar() {
  return (
    <div className='search-bar'>
      
        <input type='text' placeholder='Search..'/>
        <button className='search-icon'>
            <img src={searchIcon2}/>
        </button>
      
    </div>
  )
}

export default SearchBar
