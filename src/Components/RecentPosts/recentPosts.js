import React from 'react';
import { Link } from 'react-router-dom';
import governorAlia from '../../img/governorAlia.png';
import studentsImage from '../../img/students.png';
import exchangeImage from '../../img/exchange.png';
import arrowIcon from '../../img/arrow-up-right (2).svg';
import './recentPosts.css';


const RecentPosts = () => {
    return (
      <div className="frame-four">
        <div className="frame-five">
         <div className="title"><h2 >Recent posts</h2></div> 
         <div><p className="subtitle">
            Some of the services we offer to help you have a seamless examination experience.
          </p></div>
        </div>
        <div className= "frame-six">
        <div>
          <article className='article1' >
            <img
              // className="governor-alia"
              src={governorAlia}
              alt="Governor Alia"
              width={500}
              height={224}
            />
            <div className="heading-wrapper">
              <h3 className="heading">Gov Alia Announces Free WAEC and NECO</h3>
               <img className="icon-wrap" src={arrowIcon} alt="Read more icon" />
            </div>
            <p className="subtitle-2">
              Governor Hyacinth Alia of Benue State has declared free registration of students in the Senior
              Secondary School III operating within the state. Governor Alia stated this in a press release, and
              the program is intended to cover all students in the public secondary schools located in the
              state. Also, private secondary school...
            </p>
          </article>
          </div>
          <div className= "frame-7">
            <article className='article2' >
              <img
                src={exchangeImage}
                alt="Students in classroom"
                width={300}
                height={200}
              />
              <div className="content-3">
                {/* <div className="heading-and-text">
                  <div className="heading-and-text-2"> */}
                    <h3 className="heading-2">Our statutory functions</h3>
                    <p className="subtitle-2">
                      Benue State Examination Board was established by the Benue State Edict No.5 of 1994 in
                      compliance with the Federal Ministry of Education and Youth Development's Guidelines....
                    </p>
                  {/* </div>
                </div> */}
              </div>
            </article>
            <article className="article2">
              <img
                className="freepik-the-style-is-2"
                src={studentsImage}
                alt="Students in exchange program"
                width={300}
                height={200}
              />
              <div className="content-3">
                <div className="heading-and-text">
                  <div className="heading-and-text-2">
                    <h3 className="heading-2">Exchange programs for students</h3>
                    <p className="subtitle-2">
                      The Students Exchange Programme (SEP) was initiated by the 19 Northern states in 1989 with the
                      focus of fostering cultural integration and unity.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  };
  
  export default RecentPosts;