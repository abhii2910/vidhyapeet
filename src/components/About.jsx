import { FaUsers, FaStar } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";
import { TbMessageChatbot } from "react-icons/tb";
import { LuTrendingUp } from "react-icons/lu";
import { PiStudent } from "react-icons/pi";
import { FaUserTie } from "react-icons/fa";

import "./about.css";

// 🔹 Stats Data
const statsData = [
  { icon: <LuTrendingUp />, value: "95%", label: "Placement Rate", color: "green" },
  { icon: <FaUserTie />, value: "₹12L", label: "Average Salary", color: "blue" },
  { icon: <MdOutlineWorkOutline />, value: "500+", label: "Hiring Partners", color: "purple" },
  { icon: <PiStudent />, value: "50K+", label: "Students Transformed", color: "pink" },
];

// 🔹 Sub-stats (users, salaries, reviews, interviews)
const subStats = [
  { icon: <FaUsers />, label: "1500+ users" },
  { icon: <FaIndianRupeeSign />, label: "4 Lakhs + salaries" },
  { icon: <FaStar />, label: "500+ reviews" },
  { icon: <TbMessageChatbot />, label: "1000+ interviews" },
];

export default function StatsSection() {
  return (
    <section className="stats-section">
      {/* 🔹 Video Background */}
      <video className="video-bg" autoPlay loop muted playsInline>
        <source src="./src/assets/back2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔹 Overlay */}
      <div className="overlay"></div>

      {/* 🔹 Content */}
      <div className="stats-content">
        {/* Header */}
        <div className="stats-header">
          <h2>INDIA’S NO. 1 PLATFORM FOR</h2>
          <h3>Online Learning || Skill Up Your Future</h3>

          <div className="stats-sub">
            {subStats.map((stat, idx) => (
              <span key={idx}>
                {stat.icon} {stat.label}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {statsData.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className={`stat-icon ${stat.color}`}>{stat.icon}</div>
              <h4>{stat.value}</h4>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}