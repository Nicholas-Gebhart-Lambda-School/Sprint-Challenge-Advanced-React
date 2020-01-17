import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  return (
    <nav className="navbar">
      <h1 data-testid="nav-title">Players sprint</h1>
      <div
        onClick={setDarkMode}
        className="dark-mode__toggle"
        data-testid="dark-button"
      >
        <div
          onClick={setDarkMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
