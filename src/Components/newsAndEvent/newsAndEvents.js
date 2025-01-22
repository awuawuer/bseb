import React from 'react';
import './newsAndEvents.css';
import formImage from '../../img/127817.png';
import timetableImage from '../../img/bece.png'
import arrowicon from '../../img/arrowicon.jpg'



function NewsAndEvents() {
  return (
    <div className="news-events-container">
      <div className="news-header">
        <h2 className="news-title">News & Events</h2>
        <p className="news-subtitle">
          Stay updated with the latest news and events to enhance <br /> your examination experience.
        </p>
      </div>

      <div className="news-card-container">
        <div className="news-card">
              <img
                src={formImage}
                alt="Students in classroom"
                width={300}
                height={200}
              />
          <div className="news-card-content">
            <div className="news-card-date">27 Dec 2024</div>
            <div className='news-card-header'><h3 className="news-card-title">BECE 2024 Registration</h3>
            <img src = {arrowicon} width={20} height={20} alt="arrow-icon"/></div>
            <p className="news-card-text">
              Benue State Examination Board, Makurdi progress of activities for the
              2023/2024 Academic Session...
            </p>
            <div className="news-card-badge">Read more</div>
          </div>
        </div>

        <div className="news-card">
            <img
                src={timetableImage}
                alt="Students in classroom"
                width={300}
                height={200}
              />
          <div className="news-card-content">
            <div className="news-card-date">27 Dec 2024</div>
            <div className='news-card-header'><h3 className="news-card-title">
              BENUE STATE EXAMINATION BOARD MAKURDI 2023 BECE TIME-TABLE
            </h3>
            <img src = {arrowicon} width={20} height={20} alt="arrow-icon"/></div>
            <p className="news-card-text">
              Benue State Examination Board, Makurdi programs of activities Academic session...
            </p>
            <div className="news-card-badge">Read more</div>
          </div>
        </div>

        <div className="news-card">
            <img
                src={formImage}
                alt="Students in classroom"
                width={300}
                height={200}
              />
          <div className="news-card-content">
            <div className="news-card-date">27 Dec 2024</div>
            <div className='news-card-header'><h3 className="news-card-title">
              BENUE STATE EXAMINATION BOARD MAKURDI 2023 BECE TIME-TABLE
            </h3><img src = {arrowicon} width={20} height={20} alt="arrow-icon"/></div>
            <p className="news-card-text">
              Benue State Examination Board, Makurdi programs of activities Academic session...
            </p>
            <div className="news-card-badge">Read more</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsAndEvents;
