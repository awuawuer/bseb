import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import logo from './logo.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navigation-menu">
      <div className="frame">
        <img src={logo} alt="Logo" />
      </div>
      <button className="hamburger-menu" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`frame-2 ${menuOpen ? 'menu-open' : ''}`}>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'home-button' : 'text-wrapper')}>
          Home
        </NavLink>
        <NavLink to="/about-us" className={({ isActive }) => (isActive ? 'home-button' : 'text-wrapper')}>
          About Us
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'home-button' : 'text-wrapper')}>
          Contact
        </NavLink>
        <NavLink to="#" className="text-wrapper">
          Online Portal
        </NavLink>
      </div>
      <button className="small-button">Get Started</button>
    </nav>
  );
}

export default Header;
