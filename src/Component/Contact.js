import React from 'react'
import email from '../Component/assets/email.png'
import linkedin from '../Component/assets/linkedin.png'
import './Contact.css'
import './Nav.css'


export default function Contact() {
  return (
    <>
     <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src={email}
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p><a href="mailto:examplemail@gmail.com">rohitrannu55@gmail.com</a></p>
        </div>
        <div className="contact-info-container">
          <img
            src={linkedin}
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com">Rohit Rannu</a></p>
        </div>
      </div>
    </section>
    </>
  )
}
