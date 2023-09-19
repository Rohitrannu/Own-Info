import React from 'react'
import profile from '../Component/assets/Untitled design.jpg';
import github from '../Component/assets/github.png'
import linkedin from '../Component/assets/linkedin.png'
import './Home.css'
import './Nav.css'
import About from './About';
import Experence from './Experence';
import Project from './Project';
import Contact from './Contact';
import RohitCv from './assets/RohitCv.pdf'

export default function Home() {
    
    const openResume = () => {
        window.open(RohitCv);
      };
    
      const goToContact = () => {
        window.location.href = '/contact';
      };
    
      const goToLinkedIn = () => {
        window.location.href = 'www.linkedin.com/in/rohit-rannu';
      };
    
      const goToGithub = () => {
        window.location.href = 'https://github.com/';
      };
    return (
        <>
            <section id='profile'>
                <div className='section__pic-container'>
                    <img src={profile}  alt='img' />
                </div>
                <div className='section__text'>
                    <p className='section__text__p1'>Hello, I'm</p>
                    <h1 className='title'>Rohit Rannu</h1>
                    <p className='section__text__p2'>Frontend developer</p>
                    <div className='btn-container'>
                        <button className='btn btn-color-2'onClick={openResume}>Download Cv</button>
                        <button className='btn btn-color-1'onClick={goToContact}>Contact Info </button>
                    </div>
                    <div id="socials-container">
                        <img
                        src={linkedin}
                            alt="My LinkedIn profile"
                            className="icon"
                            onClick={goToLinkedIn} 
                           />
                        <img
                             src={github}
                            alt="My Github profile"
                            className="icon"
                            onClick={goToGithub} 
                            />
                    </div>
                </div>
            </section>
<About/>

<Experence/>
<Project/>
<Contact/>
        </>
    )
}
