import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import bdiclogo from './bdiclogo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Left Section */}
        <div className="footer-inner-left">
          <img className="graduation-cap-fill"  width={252.7} height={93.11} src={logo} alt="BSEB LOGO" />
          <div className="right-text">
            111 Makurdi-Gboko Rd, <br /> Makurdi 970101, Benue
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-inner-right">
          <div className="footer-links">
            <Link to="/about-us">About Us</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-contact">
            <p>info@bseb.com.ng</p>
            <p>+234 7031265983</p>
          </div>
          <div className="footer-bottom">
            <p>Powered by Benue Digital Infrastructure Company (BDIC)</p>
            <img className="bdic-logo" src={bdiclogo} height={33.79} width={69} alt="BDIC Logo" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
