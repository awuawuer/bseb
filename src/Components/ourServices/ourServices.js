import React from 'react';
import './ourServices.css';
// import decorativeFrame from '../assets/Frame 31.png';
import examRegistrationIcon from './Frame.jpeg';
import examConductionIcon from './Frame.jpeg';
import resultCheckerIcon from './Frame.jpeg';


const OurServices = () => {
  return (

      <div className="frame-x">
       <div className="frame-y">
         <div className="title"><h2 >Our Services</h2></div> 
         <div><p className="subtitle">
            Some of the services we offer to help you have a seamless examination experience.
          </p>
         </div>
       </div>
        <div className="card-container">
          <div className="card-wrapper">
          <div className="card">
            <img className="icon" src={examRegistrationIcon} alt="Exam Registration icon" />
            <h3 className="card-hearder">Exam Registration</h3>
            <div className="card-text">
            <p>
              You can register for the following exams on the portal: BECE, MOCK, FCCE, EBECE etc.
            </p>
            </div>
          </div>
          </div>
          <div className="">
            <img className="icon" src={examConductionIcon} alt="Exam Conduction icon" />
            <h3 className="">Exam Conduction</h3>
            <div className=""></div>
            <p className="">
              We provide efficient and secure exam conduction services for various examinations.
            </p>
          </div>
          <div className="">
            <img className="icon" src={resultCheckerIcon} alt="Result Checker icon" />
            <h3 className="">Result Checker</h3>
            <div className=""></div>
            <p className="">
              Access your exam results quickly and easily through our online result checker system.
            </p>
          </div>
        </div>
      </div>
    
  );
};

export default OurServices;