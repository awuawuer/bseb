import React from "react";
import "./About.css";
import image from "../img/groupimage.png";

function About() {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        {/* Title */}
        <div className="about-title">About Us</div>
        <div className="about-content">
          <div className="about-left-section">
            {/* Image Section */}
            <div className="about-image-section">
              <img className="about-image" src={image} alt="Group" />
            </div>
            <div className="mision-vision">
              <div className="about-vision">
                <h2>Our Vision</h2>
                <p>
                  To be a technologically driven and leading center of
                  assessment for quality education.
                </p>
              </div>
              <div className="about-vision">
                <h2>Our Mission</h2>
                <p>
                  To ensure continued improvement of quality, validity, and
                  reliability of assessment and innovative evaluation of the
                  curriculum and learners' achievement.
                </p>
              </div>
            </div>
          </div>

          {/* Write-up Section */}
          <div className="about-right-section">
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
                MOCK – Senior School Certificate Examination (SSCE). Written as
                a pre-requisite for promotion to SS3 and registration for WAEC
                and NECO SSCE.
              </li>
              <li>
                Federal Craft Certificate Examination (FCCE) for final year
                students in technical colleges.
              </li>
              <li>
                External Basic Education Certificate Examination (EBECE) for
                students of Continuing Education Centers which are coordinated
                by the Adult and Non-formal Education Agency (ANFEA)
              </li>
              <li>
                Appointment of Supervisors, Examiners, Moderators, Invigilators,
                members of subjects panel and committees and other persons
                concerned with examinations and any other matter incidental
                there-to
              </li>
              <li>Determining of Examination fees</li>
              <li>
                Awarding of Certificates namely; Certificate of Primary
                Education, Basic Education Certificate, Federal Craft
                Certificate and Teachers’ Grade II Certificate
              </li>
              <li>
                Monitoring and coordinating of Continuous Assessments in Schools
              </li>
              <li>
                Carryout research into how other examination Bodies conduct
                their activities with a view of improving the conduct of
                examinations conducted by the Board
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
