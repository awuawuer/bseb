import React from "react";
import "./managementTeam.css";
import formImage from "../../img/placeholder.png";
import timetableImage from "../../img/placeholder.png";
import LinkIn from "../../img/LinkedIn.png";
import X from "../../img/X.png";
import Drible from "../../img/Dribble.png";
import { Link } from "react-router-dom";

function ManagementTeam() {
  return (
    <div className="management-team-container">
      <div className="head-lines">
        <h2 className="management-title">Management Team</h2>
        <p className="management-subtitle">
          Some of our management team members
        </p>
      </div>

      <div className="management-team-container-2">
        <div className="management-card">
          <img
            src={formImage}
            alt="Students in classroom"
            width={300}
            height={200}
          />
          <div className="management-team-content">
            <div className="name-job-title">
              <h2>Full Name</h2>
              <h3>Job title</h3>
            </div>
            <p className="management-team-text">
              Benue State Examination Board, Makurdi progress of activities for
              the 2023/2024 Academic Session...
            </p>
            <div className="icons">
              <img src={LinkIn} alt="LinkIn" />
              <img src={X} alt="x" />
              <img src={Drible} alt="DRible" />
            </div>
          </div>
        </div>

        <div className="management-card">
          <img
            src={timetableImage}
            alt="Students in classroom"
            width={300}
            height={200}
          />
          <div className="management-team-content">
            <div className="name-job-title">
              <h2>Full Name</h2>
              <h3>Job title</h3>
            </div>
            <p className="management-team-text">
              Benue State Examination Board, Makurdi programs of activities
              Academic session...
            </p>
            <div className="icons">
              <a href="https://www.linkedin.com">
                <img src={LinkIn} alt="LinkIn" />
              </a>
              <img src={X} alt="x" />
              <img src={Drible} alt="DRible" />
            </div>
          </div>
        </div>

        <div className="management-card">
          <img
            src={formImage}
            alt="Students in classroom"
            width={300}
            height={200}
          />
          <div className="management-team-content">
            <div className="name-job-title">
              <h2>Full Name</h2>
              <h3>Job title</h3>
            </div>
            <p className="management-team-text">
              Benue State Examination Board, Makurdi programs of activities
              Academic session...
            </p>
            <div className="icons">
              <img src={LinkIn} alt="LinkIn" />
              <img src={X} alt="x" />
              <img src={Drible} alt="DRible" />
            </div>
          </div>
        </div>
      </div>

      <div className="management-team-container-2">
        <div className="management-card">
          <img
            src={formImage}
            alt="Students in classroom"
            width={300}
            height={200}
          />
          <div className="mannagement-team-content">
            <div className="name-job-title">
              <h2>Full Name</h2>
              <h3>Job title</h3>
            </div>{" "}
            <p className="management-team-text">
              Benue State Examination Board, Makurdi progress of activities for
              the 2023/2024 Academic Session...
            </p>
            <div className="icons">
              <img src={LinkIn} alt="LinkIn" />
              <img src={X} alt="x" />
              <img src={Drible} alt="DRible" />
            </div>
          </div>
        </div>

        <div className="management-card">
          <img
            src={timetableImage}
            alt="Students in classroom"
            width={300}
            height={200}
          />
          <div className="management-team-content">
            <div className="name-job-title">
              <h2>Full Name</h2>
              <h3>Job title</h3>
            </div>
            <p className="management-team-text">
              Benue State Examination Board, Makurdi programs of activities
              Academic session...
            </p>
            <div className="icons">
              <img src={LinkIn} alt="LinkIn" />
              <img src={X} alt="x" />
              <img src={Drible} alt="DRible" />
            </div>
          </div>
        </div>

        <div className="management-card">
          <img
            src={formImage}
            alt="Students in classroom"
            width={300}
            height={200}
          />
          <div className="management-team-content">
            <div className="name-job-title">
              <h2>Full Name</h2>
              <h3>Job title</h3>
            </div>
            <p className="management-team-text">
              Benue State Examination Board, Makurdi programs of activities
              Academic session...
            </p>
            <div className="icons">
              <img src={LinkIn} alt="LinkIn" />
              <img src={X} alt="x" />
              <img src={Drible} alt="DRible" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagementTeam;
