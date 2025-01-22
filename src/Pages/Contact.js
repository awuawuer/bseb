// import React from "react";
// import { TextArea } from "../TextArea";
// import students from "../students"; 
// import "./Contact.css";

// function Contact() {

//   return (
//     <div className="contact">
//       <div className="container"> 
//         <div className="content">
//           <div className="section-title">
//             <div className="tagline-wrapper">
//               <div className="div">tagline</div>
//               <div className="div-2">
//                 <div className="heading">Contact us</div>
//                 <div className="text">Send us message</div>
//               </div>
//             </div>
//             <div className="div-2">
//               <div className="input">
//                   {/* 3. Changed divs to inputs */}
//                   <input className="div-3" placeholder="Name" type="text" />
//                  <div className="text-input" />
//               </div>
//               <div className="input">
//                 <input className="div-3" placeholder="Email" type="Email" />
//                 <div className="text-input" />
//               </div>
//               <div className="input">
//                 <div className="text-wrapper-2">Message</div>
//                 <TextArea
//                   alternate={false}
//                   className="text-area-instance"
//                   img="ine-2-2.svg"
//                   line="img.svg"
//                   lineClassName="design-conponent-instance-node"
//                   lineClassNameOverride="text-area-2"
//                 />
//                 <SmallButtom
//                   className="small-button-instance"
//                   getStartedNowClassName="small-button-2"
//                   size="small"
//                   state="default"
//                   text="submit"
//                   type="secondary"
//                 />
//               </div>
//             </div>
//               <img className="student" alt="student" src={students} /> 
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import React from "react";
// import { SmallButton } from "../Button";
// import { TextArea } from "../TextArea";
import studentsImage from "../img/student.png";
import "./Contact.css";

function Contact () {
  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <div className="contact-content">
          {/* Section Title */}
          <div className="section-title">
            <div className="tagline-wrapper">
              <div className="tagline">Tagline</div>
              <div className="title-group">
                <h1 className="contact-heading">Contact Us</h1>
                <p className="contact-subtext">Send us a message</p>
              </div>
            </div>
          </div>

          {/* Input Fields */}
          <div className="form-wrapper">
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
              getStartedNowClassName="button-style"
              size="small"
              state="default"
              text="Submit"
              type="secondary"
            />
          </div>

          {/* Image */}
          <div className="image-wrapper">
            <img className="student-image" alt="Student" src={studentsImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;