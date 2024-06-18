import React, { useEffect, useState } from 'react';

const DarkAnim = () => {
  const toggleClassName = "theme-toggle--toggled";
  const [isDarkMode, setIsDarkMode] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);

  useEffect(() => {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
    const changeHandler = (e) => setIsDarkMode(e.matches);
    darkMode.addEventListener("change", changeHandler);
    return () => darkMode.removeEventListener("change", changeHandler);
  }, []);

  return (
    <button 
      className={isDarkMode ? toggleClassName : ''}
      onClick={() => setIsDarkMode(prev => !prev)}
    >
      Toggle Theme
    </button>
  );
};

export default DarkAnim;