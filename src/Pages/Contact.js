import React from "react";
import studentImage from "../img/student.png";
import "./Contact.css";

function Contact () {

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <div className="contact-content">
          {/* Section Title */}
          <div className="section-title">
            <div className="tagline-wrapper">
              {/* <div className="title-group">
                <h1 className="contact-heading">Contact Us</h1>
                <p className="contact-subtext">Send us a message</p>
              </div> */}
            </div>
          </div>

          {/* Main Content: Form and Image */}
          <div className="main-content">
            {/* Form Section */}
            <div className="form-section">
              <div className="title-group">
                <h1 className="contact-heading">Contact Us</h1>
                <p className="contact-subtext">Send us a message</p>
              </div>
              {/* Name Field */}
              <div className="input-group">
                <input
                  className="input-field"
                  placeholder="Name"
                  type="text"
                />
              </div>

              {/* Email Field */}
              <div className="input-group">
                <input
                  className="input-field"
                  placeholder="Email"
                  type="email"
                />
              </div>

              {/* Message Field */}
              <div className="input-group">
                <label className="input-label">Message</label>
                <textarea
                  alternate={false}
                  className="text-area"
                  img="line-2.svg"
                  line="img.svg"
                  lineClassName="design-component"
                  lineClassNameOverride="text-area-line"
                />
              </div>

              {/* Submit Button */}
              <button
                className="submit-button"
                // getStartedNowClassName="button-style"
                size="small"
                state="default"
                text="Submit"
                type="secondary"
              />
            </div>

            {/* Image Section */}
            <div className="image-section">
              <img className="student-image"  alt="Student" src={studentImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact