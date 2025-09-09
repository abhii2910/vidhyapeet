import React from "react";
import "./footer.css";
import { FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

// Footer data
const footerData = [
  {
    title: "Technical Skills",
    items: [
      "ChatGPT", "Coding", "Computer Science", "Cybersecurity", "DevOps",
      "Ethical Hacking", "Generative AI", "Java Programming", "Python", "Web Development",
    ],
  },
  {
    title: "Analytical Skills",
    items: [
      "Artificial Intelligence", "Big Data", "Business Analysis", "Data Analytics",
      "Data Science", "Financial Modeling", "Machine Learning", "Microsoft Excel",
      "Microsoft Power BI", "SQL",
    ],
  },
  {
    title: "Business Skills",
    items: [
       "Digital Marketing", "E-commerce", "Finance", "Google",
      "Graphic Design", "IBM", "Marketing", "Project Management", "Social Media Marketing",
    ],
  },
  {
    title: "Career Resources",
    items: [
      "Essential IT Certifications", "High-Income Skills to Learn", "How to Get a PMP Certification",
      "How to Learn Artificial Intelligence", "Popular Cybersecurity Certifications",
      "Popular Data Analytics Certifications", "What Does a Data Analyst Do?",
      "Career Development Resources", "Career Aptitude Test",
    ],
  },
];

// Social links
const socialLinks = [
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/_growyourskills_?igsh=MTNobTVpZTM4aHlwaA==",
  },
  {
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/company/grow-y-skills/",
  },
  {
    icon: <FaYoutube />,
    url: "https://www.youtube.com/@GrowSkills-i2v9n",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        {footerData.map((section, idx) => (
          <div className="footer-section" key={idx}>
            <h4>{section.title}</h4>
            <ul>
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2025 GROW YOUR SKILLS Inc. All rights reserved.</p>
        <div className="social-icons">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;