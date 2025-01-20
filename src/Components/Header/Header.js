// Header.js
import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';


function Header() {
  return (
    <nav className="navigation-menu">
      <div className="frame">
      <img src={logo} alt="Logo" />
      </div>
      <div className="frame-2">
        <a href="#" ><div className="home-button">Home</div></a>
        <a href="#"><div className="text-wrapper">About us</div></a>
        <a href="#" ><div className="text-wrapper">Contact</div></a>
        <a href="#" ><div className="text-wrapper">Online portal</div></a>
      </div>
      <button className="small-button">Get started</button>
    </nav>
  );
}

export default Header;