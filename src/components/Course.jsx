import React, { useState } from "react";
import "./course.css";
import "./App.css";



/* ===== Reusable Course Card Component ===== */
function CourseCard({ course, onViewDetails }) {
  const { title, image, badge } = course;

  return (
    <div className="course-card">
      <div className="card-inner">
        <div className="card-front">
          <img
            src={image || "https://via.placeholder.com/300"}
            alt={title}
            className="card-image"
          />
          <span className="card-badge">{badge}</span>
        </div>
        <div className="card-back">
          <h2>{title}</h2>
          <button className="view-button" onClick={onViewDetails}>VIEW DETAILS →</button>
        </div>
      </div>
    </div>
  );
}

// Import images
import webDevelopment from "./assets/web1.jpg";
import AWS from "./assets/aws.png";
import IOT from "./assets/iot.jpg";
import CyberSecurity from "./assets/cyber.jpg";
import VLSI from "./assets/vlsi.jpg";
import CloudComputing from "./assets/cloud.jpg";
import AI from "./assets/ai.jpg";
import MachineLearningPython from "./assets/mlpy.jpg";
import Python from "./assets/python.jpg";
import UIUX from "./assets/uiux.jpg";
import AutoCADCatia from "./assets/auto.jpg";
import HR from "./assets/hr.jpg";
import Finace from "./assets/FINANCE.jpg";
import DigitalMarketing from "./assets/DIGITAL MARKETING.jpg";
import BDA from "./assets/bda.jpg";
import Data from "./assets/DATA SCIENCE.jpg";
import React1 from "./assets/React js.jpg";

const coursesData = [
  { title: "WEB DEVELOPMENT (WD)", description: "Web development is the process of creating and maintaining websites and web applications...", image: webDevelopment, badge: "Live & Recorded" },
  { title: "AWS", description: "The AWS course provides a comprehensive introduction to Amazon Web Services...", image: AWS, badge: "Live & Recorded" },
  { title: "IOT & ROBOTICS", description: "The IoT and Robotics course introduces students to interconnected smart devices...", image: IOT, badge: "Live & Recorded" },
  { title: "CYBER SECURITY", description: "A Cybersecurity course provides foundational to advanced knowledge...", image: CyberSecurity, badge: "Live & Recorded" },
  { title: "VLSI", description: "The VLSI (Very Large Scale Integration) course covers design and development...", image: VLSI, badge: "Live & Recorded" },
  { title: "CLOUD COMPUTING", description: "This Cloud Computing course provides a comprehensive understanding...", image: CloudComputing, badge: "Live & Recorded" },
  { title: "AI", description: "This Artificial Intelligence course introduces the fundamentals of AI...", image: AI, badge: "Live & Recorded" },
  { title: "MACHINE LEARNING & PYTHON", description: "Introduces supervised, unsupervised learning, model evaluation...", image: MachineLearningPython, badge: "Live & Recorded" },
  { title: "PYTHON", description: "This Python course covers basics to advanced concepts...", image: Python, badge: "Live & Recorded" },
  { title: "UI & UX", description: "The UI/UX course provides a solid foundation in user interface design...", image: UIUX, badge: "Live & Recorded" },
  { title: "AUTOCAD & CATIA", description: "This course covers AutoCAD and CATIA, equipping learners with drafting and modeling...", image: AutoCADCatia, badge: "Live & Recorded" },
  { title: "HUMAN RESOURCES HR", description: "This HR course provides foundational knowledge of HR management...", image: HR, badge: "Live & Recorded" },
  { title: "FINANCE", description: "This course provides a comprehensive overview of financial principles and practices.", image: Finace, badge: "Live & Recorded" },
  { title: "DIGITAL MARKETING", description: "This course covers digital marketing strategies, including SEO, social media, and content marketing.", image: DigitalMarketing, badge: "Live & Recorded" },
  { title: "DATA SCIENCE", description: "This course introduces data science concepts, including data analysis and visualization.", image: Data, badge: "Live & Recorded" },
  { title: "Explore Business Development Associate (BDA)", description: "This course covers business development strategies, including market research and sales techniques.", image: BDA, badge: "Live & Recorded" },
  { title: "React JS", description: "This course covers software development principles, including coding and application design.", image: React1, badge: "Live & Recorded" },
];

export default function Course() {
  const [showAll, setShowAll] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const toggleShowAll = () => setShowAll(prev => !prev);

  const openCourse = (course) => setSelectedCourse(course);
  const closeCourse = () => setSelectedCourse(null);

  return (
    <section className="courses-section">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src="./src/assets/back2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>

      {/* Content */}
      <div className="courses-content">
        <h1 className="course-header">Your course, at <br /> Your Fingertips</h1>
        <p className="course-subtext">
          Discover top-notch courses from VIDHYAPEET GROW YOUR SKILLS, created to simplify learning and deepen your understanding
        </p>

        {/* Courses Grid */}
        <div className="course-grid">
          {(showAll ? coursesData : coursesData.slice(0, 4)).map((course, idx) => (
            <CourseCard key={idx} course={course} onViewDetails={() => openCourse(course)} />
          ))}
        </div>

        {/* Toggle Button */}
        <div className="view-more-wrapper">
          <button className="view-more-button" onClick={toggleShowAll}>
            {showAll ? "SHOW LESS" : "VIEW MORE"}
          </button>
        </div>
      </div>

      {/* Modal Popup */}
      {selectedCourse && (
        <div className="modal-overlay" onClick={closeCourse}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeCourse}>×</button>
            
            {/* Course Details */}
            <img src={selectedCourse.image} alt={selectedCourse.title} className="modal-image" />
            <h2>{selectedCourse.title}</h2>
            <span className="modal-badge">{selectedCourse.badge}</span>
            <p className="modal-description">{selectedCourse.description}</p>

            {/* Attractive Promo Section */}
            <div className="modal-promo" style={{ color: '#333' }}>
              <h3>🚀 Why Join This Course?</h3>
              <ul>
                <li>✔ Hands-on projects & real-world case studies</li>
                <li>✔ Learn from industry experts</li>
                <li>✔ Flexible learning – live & recorded sessions</li>
                <li>✔ Certificate of completion</li>
              </ul>
            </div>

            {/* Join Button */}
            <button className="join-button">Join Now →</button>
          </div>
        </div>
      )}
    </section>
  );
}


