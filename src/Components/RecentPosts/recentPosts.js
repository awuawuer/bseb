import React from 'react';
import governorAlia from '../../img/governorAlia.png';
import studentsImage from '../../img/students.png';
import exchangeImage from '../../img/exchange.png';
import arrowIcon from '../../img/arrowicon.jpg';
import './recentPosts.css';


const RecentPosts = () => {
    return (
      <div className="posts-container">
        <div className="header">
         <h2 className="title">Recent posts</h2>
        <p className="subtitle">
            Some of the services we offer to help you have a seamless <br /> examination experience.
          </p>
        </div>
        <div className= "frame-sixs">
        <div>
          <article className='article1' >
            <img
              className='article1-image'
              src={governorAlia}
              alt="Governor Alia"
            />
            <div className="heading-wrapper">
              <h3 className="heading">Gov Alia Announces Free WAEC and NECO</h3>
               <img className="icon-wrap" src={arrowIcon} width={25} height={25} alt="Read more icon" />
            </div>
            <div className='subtitle-container'>
            <p className="subtitle-2">
              Governor Hyacinth Alia of Benue State has declared free registration of students in the Senior
              Secondary School III operating within the state. Governor Alia stated this in a press release, and
              the program is intended to cover all students in the public secondary schools located in the
              state. Also, private secondary school...
            </p>
            </div>
          </article>
          </div>
          <div className= "frame-sevens">
            <div className='article2' >
              <img
                src={exchangeImage}
                alt="Students in classroom"
                className='article2-image'
              />
              <div className="left-articles">
                    <h3 className="heading">Our statutory functions</h3>
                    <p className="subtitle-2">
                      Benue State Examination Board was established by the Benue State Edict No.5 of 1994 in
                      compliance with the Federal Ministry of Education and Youth Development's Guidelines....
                    </p>
              </div>
            </div>
            <div className="article2">
              <img
                className="article2-image"
                src={studentsImage}
                alt="Students in exchange program"
              />
              <div className="right-articles">
                    <h3 className="heading">Exchange programs for students</h3>
                    <p className="subtitle-2">
                      The Students Exchange Programme (SEP) was initiated by the 19 Northern states in 1989 with the
                      focus of fostering cultural integration and unity.
                    </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default RecentPosts;