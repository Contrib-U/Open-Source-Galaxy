import React from 'react'
import './Header.css'
import SearchBar from './SearchBar';
import Authentication from './Authentication';
import ThemeToggle from './ThemeToggle';
import { ThemeContext } from './ThemeContext';
import { useEffect,useContext } from 'react';

function Header() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  useEffect(()=>{
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  },[isDarkMode])
  
  return (
    <div className='header'>
        <h1>
            Open Source Galaxy
        </h1>
        <ThemeToggle/>
        <SearchBar/>
        <Authentication />
    </div>
  )
}

export default Header