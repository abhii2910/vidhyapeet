import React from "react";
import "./team.css";
import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
    {
    id: 7,
    name: "ABHISHEK SINGH",
    role: "CEO",
    img: "./src/assets/TEAM6.jpg",
    linkedin: "https://www.linkedin.com/in/abhishek-singh-a1a801243",
    bgColor: "#ca9e7145",
  },
    {
    id: 3,
    name: "PRAKASH",
    role: "MANAGER",
    img: "./src/assets/team2.jpg",
    linkedin: "https://www.linkedin.com/in/prakash-ramachandran-2868b2269",
    bgColor: "#ca9e7145",
  },
  {
    id: 2,
    name: "AAKASH",
    role: "HR",
    img: "./src/assets/team1.jpg",
    linkedin: "https://www.linkedin.com/in/aakash-k-5bab332b8",
    bgColor: "#3857a02e",
  },
  
  {
    id: 4,
    name: "RITHISH KUMAR",
    role: "TEAM LEADER",
    img: "./src/assets/team3.jpg",
    linkedin: "https://www.linkedin.com/in/s-rithish-kumar-a2284a283",
    bgColor: "#85090944",
  },
  {
    id: 5,
    name: "BRUNDHA",
    role: "HR",
    img: "./src/assets/TEAM4.jpg",
    linkedin: "https://www.linkedin.com/in/b-brundha-494951340",
    bgColor: "#9b9b9b70",
  },
  {
    id: 6,
    name: "ARCHANA",
    role: "HR",
    img: "./src/assets/TEAM5.jpg",
    linkedin: "https://www.linkedin.com/in/archana-k-a873a8309",
    bgColor: "#3857a02e",
  },
  {
    id: 1,
    name: "DAVID BABU",
    role: "TEAM LEADER",
    img: "./src/assets/team.jpg",
    linkedin: "https://www.linkedin.com/in/babu-p-a43634269",
    bgColor: "#9b9b9b70",
  },
  {
    id: 8,
    name: "ABHISHEK BAGHEL",
    role: "IT",
    img: "./src/assets/TEAM7.jpg",
    linkedin: "https://www.linkedin.com/in/abhishekbaghel29",
    bgColor: "#85090944",
  },
  {
    id: 9,
    name: "MOHAN",
    role: "TEAM LEADER",
    img: "./src/assets/TEAM8.jpg",
    linkedin: "https://www.linkedin.com/in/mohan-m-660442316",
    bgColor: "#9b9b9b70",
  },
  {
    id: 10,
    name: "KARTHIK SANTHOSH",
    role: "TEAM LEADER",
    img: "./src/assets/TEAM9.jpg",
    linkedin: "https://www.linkedin.com/in/adari-karthik-579053316",
    bgColor: "#3857a02e",
  },
   {
    id: 11,
    name: "NICKHIL M S ",
    role: "TEAM LEADER",
    img: "./src/assets/TEAM11.jpg",
    linkedin: "https://www.linkedin.com/in/nickhil-m-s-66b350320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    bgColor: "#ca9e7145",
  },
];

const Team = () => {
  return (
    <>
      {/* Fixed background video */}
      <video autoPlay loop muted playsInline className="bg-video-fixed">
        <source src="./src/assets/back2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Team Section */}
      <section className="team-container">
        <h2 style={{ color: "black" }}>OUR TEAM</h2>
        <div className="cards-container">
          {teamMembers.map((member) => (
            <div
              className="team-card fade-in"
              key={member.id} // Use unique ID as key
              style={{ backgroundColor: member.bgColor }}
            >
              <img src={member.img} alt={member.name} className="team-img" />
              <div className="card-icon">
                {member.linkedin ? (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin style={{ color: "#007bff", fontSize: "1.5rem" }} />
                  </a>
                ) : (
                  <FaLinkedin style={{ color: "#007bff", fontSize: "1.5rem" }} />
                )}
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Team;
