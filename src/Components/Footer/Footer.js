
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from './logo.png'
import bdiclogo from './bdiclogo.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-inner-left">
          <img className="graduation-cap-fill" src={logo} alt="BSEB LOGO" />
          <div className="right-text">111 Makurdi-Gboko Rd, Makurdi 970101, Benue</div>
        </div>
        <div className="footer-inner-right">
            <div className='footer-down'>
            <a href="#" >About US</a>
            <a href="#" > Contact</a>
            </div>
            <div className='footer-down' >
              <p>info@bseb.com.ng </p>
              <p > +234 806 502 5147</p>
            </div>
            <div className="footer-bottom">
              <p className="">Powered by Benue Digital Infrastructure Company (BDIC)</p>
              <img className="BDIC-logo" src={bdiclogo} height={34} width={69} alt="BDIC Logo" />
            </div>
        </div>
      </div>
        
      
    </footer>
  );
}

export default Footer;
