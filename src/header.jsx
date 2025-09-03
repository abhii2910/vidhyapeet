import React, { useState } from "react";
import "./header.css";
import Contact from "./Contact.jsx";
import App from "./App.jsx";
import Courses from "./Course.jsx";
import Place from "./Places.jsx";
import Footer from "./Footer.jsx";
import Certificate from "./Certi.jsx";
import Team from "./Team.jsx";
import StatsSection from "./About.jsx";
import LOGIN from "./Login.jsx";

const Header = () => {
  const [showGalleryPopup, setShowGalleryPopup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // If login is open → show only login page fullscreen
  if (showLogin) {
    return (
      <div className="login-fullscreen" style={{ position: "relative" }}>
        <LOGIN />

        {/* Back to Home button (top-right) */}
        <button
          onClick={() => setShowLogin(false)}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            padding: "10px 20px",
            border: "none",
            borderRadius: "6px",
            background: "#3b82f6",
            color: "white",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          ⬅ Back to Home
        </button>
      </div>
    );
  }

  return (
    <>
      <header className="header-3d">
        <div className="logo-container">
          <img src="src/assets/logo.png" alt="Logo" className="logo-img" />
          <span className="logo-text">Grow your Skills</span>
        </div>

        <nav className="nav-links">
          <div className="nav-buttons">
            <button onClick={() => scrollTo("home")}>Home</button>
            <button onClick={() => scrollTo("about")}>About</button>
            <button onClick={() => scrollTo("courses")}>Courses</button>
            <button onClick={() => scrollTo("notes")}>Certificate</button>
            <button onClick={() => scrollTo("centres")}>Centres</button>
            <button onClick={() => scrollTo("contact")}>Contact</button>

            {/* Gallery Button */}
            <button onClick={() => setShowGalleryPopup(true)}>Gallery</button>
          </div>

          {/* LOGIN button on the right */}
          <div className="login-btn">
            <button onClick={() => setShowLogin(true)}>Login</button>
          </div>
        </nav>
      </header>

      {/* ✅ Gallery Popup */}
      {showGalleryPopup && (
        <div className="gallery-popup" style={{ position: "relative" }}>
          <div className="gallery-content">
            {/* Close button (top-left) */}
            <button
              className="close-btn"
              onClick={() => setShowGalleryPopup(false)}
              style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                padding: "8px 12px",
                border: "none",
                borderRadius: "6px",
                background: "red",
                color: "white",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              ✖
            </button>

            {/* Back to Home button (top-right) */}
            <button
              onClick={() => setShowGalleryPopup(false)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                padding: "10px 20px",
                border: "none",
                borderRadius: "6px",
                background: "#3b82f6",
                color: "white",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              ⬅ Back to Home
            </button>

            <div className="gallery-grid">
              <img src="./src/assets/gallery3.jpg" alt="g1" />
              <video autoPlay loop muted playsInline>
                <source src="./src/assets/gallery2.mp4" type="video/mp4" />
              </video>
              <video autoPlay loop muted playsInline>
                <source src="./src/assets/gallery4.mp4" type="video/mp4" />
              </video>
              <video autoPlay loop muted playsInline>
                <source src="./src/assets/gallery8.mp4" type="video/mp4" />
              </video>
              <video autoPlay loop muted playsInline>
                <source src="./src/assets/gallery9.mp4" type="video/mp4" />
              </video>
              <img src="./src/assets/gallery7.jpg" alt="g2" />
              <img src="./src/assets/gallery5.jpg" alt="g3" />
              <img src="./src/assets/gallery6.jpg" alt="g4" />
              <img src="./src/assets/gallery1.jpg" alt="g5" />
            </div>
          </div>
        </div>
      )}

      {/* Sections */}
      <section id="home" className="section">
        <App />
        <StatsSection />
      </section>

      <section id="about" className="section"></section>

      <section id="courses" className="section">
        <Courses />
      </section>

      <section id="centres" className="section">
        <Place />
      </section>

      <section id="notes" className="section">
        <Certificate />
      </section>

      <section id="team" className="section">
        <Team />
      </section>

      <section id="contact" className="section">
        <Contact />
        <Footer />
      </section>
    </>
  );
};

export default Header;
