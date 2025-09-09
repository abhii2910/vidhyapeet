import React from 'react'
import './App.css'
import heroImage from './assets/int.png'


// Social Icons
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'


import Certificate from './Certificates.jsx';
import Courses from './Course.jsx';
import Place from './Places.jsx';
import Teams from './Team.jsx';
import Logins from './Login.jsx';
import Footers from './Footer.jsx';
import Headers from './Header.jsx';


export default function App() {
  return (
    <>
      <Headers />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-text">
            <h1 className="title">
              Explore <br />
              VIDHYAPEET <br />
              GROW YOUR SKILLS
            </h1>
            <p className="description">
              Turning curiosity into clarity, We have everything that you need to grow
            </p>
            <button className="cta-button">Explore More!</button>

            {/* Social Media Icons */}
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/_growyourskills_?igsh=MTNobTVpZTM4aHlwaA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@GrowSkills-i2v9n"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="Hero" />
          </div>
        </div>
      </section>
      {/* Other Sections */}

      <Courses />
      <Place />
      <Certificate />
      <Teams />
      <Logins />
      <Footers />
    </>
  )
}
