import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "./logo.png";
import { BiMenu } from "react-icons/bi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navigation-menu">
      <div className="frame">
        <NavLink to="/">
          {" "}
          <img src={logo} alt="Logo" />{" "}
        </NavLink>
      </div>
      <BiMenu className="menuIcon" onClick={toggleMenu} />
      <div className={`frame-2 ${menuOpen ? "menu-open" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "home-button" : "text-wrapper"
          }
          onClick={closeMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            isActive ? "home-button" : "text-wrapper"
          }
          onClick={closeMenu}
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "home-button" : "text-wrapper"
          }
          onClick={closeMenu}
        >
          Contact
        </NavLink>

        <a href="#Services" className="text-wrapper" onClick={closeMenu}>
          Services
        </a>

        <NavLink to="#" className="text-wrapper" onClick={closeMenu}>
          Online Portal
        </NavLink>
        <button className="small-button" onClick={closeMenu}>
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Header;
