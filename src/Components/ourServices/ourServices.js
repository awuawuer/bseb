import React from 'react';
import './ourServices.css';
import examRegistrationIcon from '../../img/graduade-icon.png';
import examConductionIcon from '../../img/computer-icon.png';
import resultCheckerIcon from '../../img/graduade-icon.png';

const OurServices = () => {
  return (
    <div className="our-services-container">
      <div className="header">
        <h2 className="title">Our Services</h2>
        <p className="subtitle">
          Some of the services we offer to help you have a seamless examination experience.
        </p>
      </div>
      <div className="card-container">
        <div className="card">
          <img
            className="icon"
            src={examRegistrationIcon}
            alt="Exam Registration icon"
          />
          <h3 className="card-title">Exam Registration</h3>
          <hr className='line' style={{backgroundColor:'red'}}></hr>
          <p className="card-text">
            You can register for the following exams on the portal: BECE, MOCK,
            FCCE, EBECE etc.
          </p>
        </div>
        <div className="card">
          <img
            className="icon"
            src={examConductionIcon}
            alt="Exam Conduction icon"
          />
          <h3 className="card-title">Exam Conduction</h3>
          <hr className='line' style={{backgroundColor:'red'}}></hr>
          <p className="card-text">
            We provide efficient and secure exam conduction services for various
            examinations.
          </p>
        </div>
        <div className="card">
          <img
            className="icon"
            src={resultCheckerIcon}
            alt="Result Checker icon"
          />
          <h3 className="card-title">Result Checker</h3>
          <hr className='line' style={{backgroundColor:'red'}}></hr>
          <p className="card-text">
            Access your exam results quickly and easily through our online
            result checker system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
