import React from 'react'
import './Nav.css'
import project1 from './assets/project-1.png'
import project2 from './assets/project-2.png'
import project3 from './assets/project-3.png'
import arrow from './assets/arrow.png'

export default function Project() {
  
    const goToExperence = () => {
        window.location.href = './#Expre';
      };
  return (
    <>
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img
            src={project1}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project One</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
              
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
               src={project2}
                alt="Project 2"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project Two</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
              
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
             
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
              src={project3}
                alt="Project 3"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project Three</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow icon"
        className="icon arrow"
       onClick={goToExperence }
      />
    </section>
    
    </>
  )
}
