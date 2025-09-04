import React from 'react'
import './App.css'
import heroImage from './assets/int.png'


// Social Icons
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import Header from './Header';
import Courses from './Course.jsx';
import App11 from './Places.jsx';
import Certificates from './Certi.jsx';
import Team from './Team.jsx';
import LOGIN from './Login.jsx'
import Footer from './Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
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
      <App11 />
      <Certificates />
      <Team />
      <LOGIN />
      <Footer />
    </>
  )
}
