import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import logo from './logo.png';

function Header() {
  return (
    <nav className="navigation-menu">
      <div className="frame">
        <img src={logo} alt="Logo" />
      </div>
      <div className="frame-2">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'home-button' : 'text-wrapper')}>
          Home
        </NavLink>
        <NavLink to="/about-us" className={({ isActive }) => (isActive ? 'home-button' : 'text-wrapper')}>
          About Us
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'home-button' : 'text-wrapper')}>
          Contact
        </NavLink>
        <NavLink to="/online-portal" className={({ isActive }) => (isActive ? 'home-button' : 'text-wrapper')}>
          Online Portal
        </NavLink>
      </div>
      <button className="small-button">Get Started</button>
    </nav>
  );
}

export default Header;
