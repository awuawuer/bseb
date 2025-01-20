// HeroSection.js
import React from 'react';
import './HeroSection.css';
import Image4 from './image4.png';
import Avartar1 from '../../img/F (2).png';
import Avartar2 from '../../img/M.png';
import Avartar3 from '../../img/pablo-page-not-found 3.png';
import Avartar4 from '../../img/F.png';
import Avartar5 from '../../img/M (3).png';
import Avartar6 from '../../img/teacher.png';
import Avartar7 from '../../img/book-saved.png';


function HeroSection() {
  return (
    <section className="hero-section">
      <div className="overlap">
        <div className="overlap-group">
          <div className="image">
            <div className="overlap-2">
              <div className="base"></div>
              <div className="image-container">
                <img
                  className="freepik-the-style-is"
                  src={Image4}
                  alt="Students studying"
                />
              </div>
              <div className="element">
                <div className="text-wrapper-2">100+ Schools</div>
                <div className="text-wrapper-3">Currently onboarded.</div>
              </div>
              <div className="element-2">
                <div className="images">
                  <div className="avatar">
                    <div className="overlap-group-2"><img src={Avartar1} /></div>
                  </div>
                  <div className="overlap-wrapper">
                    <div className="overlap-group-2"><img className="img" src={Avartar2} /></div>
                  </div>
                  <div className="overlap-wrapper">
                    <div className="overlap-group-2"><img className="img" src={Avartar3} /></div>
                  </div>
                  <div className="overlap-wrapper">
                    <div className="overlap-group-2"><img className="img" src={Avartar4}/></div>
                  </div>
                  <div className="overlap-wrapper">
                    <div className="overlap-group-2">
                      <div className="rectangle"></div>
                      <div className="text-wrapper-4">+ 50</div>
                    </div>
                  </div>
                </div>
                <div className="text-wrapper-3">User reviews</div>
              </div>
              <div className="element-3">
                <img className="avatar-2" src={Avartar5} />
                <div className="content">
                  <div className="text-wrapper-5">Terver John</div>
                  <p className="text-wrapper-3">I love how seamless the portal is.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="group-2">
            <div className="dogecoin-is-an-open-wrapper">
              <p className="dogecoin-is-an-open">The best way to manage exams</p>
            </div>
            <div className="frame-3">
              <div className="group-3">
                <div className="overlap-group-wrapper">
                  <div className="vuesax-bulk-teacher-wrapper">
                    <img className="img-2" src={Avartar6} alt="Teacher icon" />
                  </div>
                </div>
                <div className="div-wrapper">
                  <div className="overlap-4">
                    {/* <img className="start-using-dogecoin" src={Avartar7} alt="Decorative Image" /> */}
                    <p><span className='span'>Benue</span>{" "}State Examination Board</p>
                    <div className="group-4">
                      <div className="vuesax-bulk-book-wrapper">
                        <img className="img-2" src={Avartar7} alt="Book icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="p">The smart way to manage Exams with Accuracy, Speed, and Transparency Guaranteed</p>
            </div>
          </div>
        </div>
        <button className="large-button"><span className="get-started-now-2">Login</span></button>
      </div>
    </section>
  );
}

export default HeroSection;