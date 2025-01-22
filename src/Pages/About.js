import React from "react";
import "./About.css";
import image from "../img/group-pic.png";

function About ()  {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        {/* Title */}
        <div className="about-title">About Us</div>

        {/* Image Section */}
        <div className="about-image-section">
          <img
            className="about-image"
            src={image}
            alt="Group Picture"
          />
        </div>

        {/* Write-up Section */}
        <div className="about-content">
          <p className="about-intro">
            Benue State Examinations Board was established by the Benue State
            Edict No.5 of 1994 in compliance with the Federal Ministry of
            Education and Youth Development’s Guidelines on uniform standards
            for Junior School Certificates Examinations.
          </p>

          <ul className="about-list">
            <li>
              Basic Education Certificate Examination (BECE) for students in
              Basic 9 formerly known as JSS3.
            </li>
            <li>
              MOCK – Senior School Certificate Examination (SSCE). Written as a
              pre-requisite for promotion to SS3 and registration for WAEC and
              NECO SSCE.
            </li>
            <li>
              Federal Craft Certificate Examination (FCCE) for final year
              students in technical colleges.
            </li>
            <li>
              External Basic Education Certificate Examination (EBECE) for
              students of Continuing Education Centers.
            </li>
          </ul>

          <p className="about-vision-mission">
            <span className="about-highlight">Our Vision:</span> <p>To be a technologically
            driven and leading center of assessment for quality education.</p>
            <br />
            <span className="about-highlight">Our Mission:</span> <p>To ensure continued
            improvement of quality, validity, and reliability of assessment and
            innovative evaluation of the curriculum and learners' achievement.</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About