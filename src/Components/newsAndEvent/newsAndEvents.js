import React from 'react';
import './newsAndEvents.css';
// import image from './image.png' // Assuming you have an image file path for the icon-wrap
// import BECE2021IMAGE from './Components/img/BECE2021-MAGE (1).png' // Assuming you have an image file path for the element images


function NewsAndEvents() { // Corrected component name to PascalCase
  return (
    <div className="frame">
      <div className="div">
        <div className="start_using_dogecon">News & Events</div>
        <p className="dogecoin-is-an-open">
          Some of the services we offer to help you have a seamless examination
          experience
        </p>
      </div>

      <div className="row">
        <div className="blog-post-card">
          {/* <img className="element" alt="Element" src={BECE2021IMAGE} /> */}

          <div className="content">
            <div className="heading heading-and-text"> {/* Corrected classname to className */}
              <div className="author">27 Dec 2024</div>

              <div className="heading-and-icon">
                <div className="heading">BECE 2024 Registration</div>

                {/* <img className="icon-wrap" alt="icon-wrap" src={image} /> */}
              </div>

              <p className="supporting-text">
                Benue State Examination Board, Makurdi progress of activities for
                the 2023/2024 Academic Session...
              </p>
            </div>

            <div className="badge">
              <div className="badge-base">
                <div className="text">Read more</div> {/* Corrected classname to className */}
              </div>
            </div>
          </div>
        </div>


        <div className="blog-post-card">
          {/* <img className="element" alt="Element" src={BECE2021IMAGE} /> */}

          <div className="content">
            <div className="heading heading-and-text">  {/* Corrected classname to className */}
              <div className="author">27 Dec 2024</div>

              <div className="heading-and-icon">
                <div className="heading">
                  <p className="heading">
                    BENUE STATE EXAMINATION BOARD MAKURDI 2023 BECE TIME-TABLE
                  </p>
                   
                </div>
                {/* <img className="icon-wrap" alt="icon-wrap" src={image} /> */}
              </div>
                <p className="text-wrapper">
                    Benue State Examination Board, Makurdi programs of activities
                    Academic session...
                  </p>
             
            </div>
            <div className="badge">
              <div className="badge-base">
                <div className="text">Read more</div>  {/* Corrected classname to className */}
              </div>
            </div>
          </div>
        </div>


          <div className="blog-post-card">
            {/* <img className="element" alt="Element" src={BECE2021IMAGE} /> */}

            <div className="content">
              <div className="heading heading-and-text">   {/* Corrected classname to className */}
                <div className="author">27 Dec 2024</div>

                <div className="heading-and-icon">
                    <p className="heading">
                    BENUE STATE EXAMINATION BOARD MAKURDI 2023 BECE TIME-TABLE
                  </p>
                  {/* <img className="icon-wrap" alt="icon-wrap" src={image} /> */}
                </div>
                  
                  <p className="text-wrapper">
                     Benue State Examination Board, Makurdi programs of
                     activities Academic session...
                  </p>

               
              </div>

              <div className="badge">
                <div className="badge-base">
                  <div className="text">Read more</div>   {/* Corrected classname to className */}
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default NewsAndEvents;