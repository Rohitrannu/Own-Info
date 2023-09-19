import React from 'react'
import './About.css'
import './Home.css'
import './Nav.css'
import profile2 from '../Component/assets/IMG_0216blck.jpg' 
import experience from '../Component/assets/experience.png' 
import education from '../Component/assets/education.png' 
import arrow from '../Component/assets/arrow.png' 

export default function About() {

    const goToExerience = () => {
        window.location.href = './#experience';
      };
  return (
    <>
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src={profile2}
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src={experience}
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>1+ years <br />Frontend Development</p>
            </div>
            <div className="details-container">
              <img
                src={education}
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>React Js<br />DCA Diploma</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
              reprehenderit et laborum, rem, dolore eum quod voluptate
              exercitationem nobis, nihil esse debitis maxime facere minus sint
              delectus velit in eos quo officiis explicabo deleniti dignissimos.
              Eligendi illum libero dolorum cum laboriosam corrupti quidem,
              reiciendis ea magnam? Nulla, impedit fuga!
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow icon"
        className="icon arrow"
        onClick={goToExerience}
      />
    </section>
    
    </>
  )
}
