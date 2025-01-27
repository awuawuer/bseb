import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import studentImage from "../img/student.png";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceID = "service_hjf1k8i"; 
    const templateID = "template_5ejmlel"; 
    const userID = "DWRUHNbpo0P9aE_in"; 

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setStatus("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <div className="contact-content">
          {/* Main Content: Form and Image */}
          <div className="main-content">
            {/* Form Section */}
            <div className="form-section">
              <div className="title-group">
                <h1 className="contact-heading">Contact Us</h1>
                <p className="contact-subtext">Send us a message</p>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="input-group">
                  <input
                    className="input-field"
                    placeholder="Name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="input-group">
                  <input
                    className="input-field"
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Message Field */}
                <div className="input-group">
                  <label className="input-label">Message</label>
                  <textarea
                    className="text-area"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Submit Button */}
                <button className="submit-button" type="submit">
                  Submit
                </button>
              </form>

              {/* Status Message */}
              {status && <p className="status-message">{status}</p>}
            </div>

            {/* Image Section */}
            <div className="image-section">
              <img
                className="student-image"
                alt="Student"
                src={studentImage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
