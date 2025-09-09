import React, { useState, useEffect } from 'react';
import {
  FaTachometerAlt,
  FaBookOpen,
  FaMoneyBillWave,
  FaSearch,
  FaBookmark,
  FaPlusCircle,
  FaBell,
  FaUser,
  FaHistory,
  FaCertificate,
  FaSignOutAlt
} from 'react-icons/fa';
import './login.css';


const DashboardContent = ({ userName }) => {
  return (
    <div className="dashboard-container">
      <h2>👋 Hi, {userName || "Grow Your Skills"}</h2>
      <div className="cards-grid">
        <div className="card"><h4>Total Courses</h4><p><strong>0/0</strong></p><span className="text-green">Completed / Enrolled</span></div>
        <div className="card"><h4>Total Score</h4><p><strong>0/0</strong></p><span className="text-red">0 AVG</span></div>
        <div className="card"><h4>Total Attendance</h4><p><strong>0</strong></p><span className="text-green">Hours</span></div>
        <div className="card"><h4>Late Entries</h4><p><strong>0/0</strong></p><span className="text-green">Till Date</span></div>
        <div className="card"><h4>My Courses</h4><p>No My Courses Found.</p></div>
        <div className="card"><h4>Live/Upcoming Classes</h4><p>No Live/Upcoming Classes Found.</p></div>
        <div className="card"><h4>Notifications</h4><p>No Notifications Found.</p></div>
        <div className="card"><h4>Assignments</h4><p>No Assignments Found.</p></div>
        <div className="card"><h4>Quiz</h4><p>No Quizzes Found.</p></div>
      </div>
    </div>
  );
};





/* ---------------- Courses ---------------- */
const Courses = ({ triggerLoginModal }) => {
  const [saved, setSaved] = useState(false);
  const handleSaveMaterials = () => {
    setSaved(true);
    alert('Materials have been saved!');
  };
  return (
    <div className="courses-section">
      <div className="top-nav">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
        <button className="saved-btn" onClick={handleSaveMaterials}>
          <FaBookmark /> {saved ? 'Materials Saved' : 'Save Materials'}
        </button>
      </div>
      <div className="no-courses">
        <img src="https://vidhyapeetgrowyourskills.in/assets/icons/not-found.svg" alt="No Courses" />
        <h2>No Courses Found</h2>
        <p>You're not enrolled in any courses yet. Join a course to explore all its content and materials right here!</p>
        <button className="browse-btn" onClick={() => triggerLoginModal()}>
          <FaPlusCircle /> Browse Courses
        </button>
      </div>
    </div>
  );
};

/* ---------------- Additional Purchases ---------------- */
const AdditionalPurchases = ({ triggerLoginModal }) => {
  return (
    <div className="purchases-container">
      <img src="https://vidhyapeetgrowyourskills.in/assets/icons/not-found.svg" alt="No Purchase" className="purchases-image" />
      <h2 className="purchases-title">No Items Purchased Yet</h2>
      <p className="purchases-subtext">Start by purchasing your first course, book, or webinar.</p>
      <p className="purchases-subtext">Unlock expert guidance and begin your personalized learning journey today!</p>
      <button className="explore-button" onClick={() => triggerLoginModal()}>
        <FaPlusCircle className="explore-icon" /> Explore Now
      </button>
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white border-b">
      <h2 className="text-lg font-semibold">👋 Welcome, Harish R</h2>
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-600">Hi, Harish R</span>
        <div className="h-10 w-10 rounded-full bg-green-700 text-white flex items-center justify-center font-semibold">
          H
        </div>
      </div>
    </div>
  );
};

/* ---------------- Purchase History ---------------- */
const PurchaseHistory = () => {
  const purchases = []; // Empty array so no purchases are found

  return (
    <div className="purchase-history">
      <h2>Purchase History</h2>
      {purchases.length === 0 ? (
        <p>No purchase history found.</p>
      ) : (
        <table className="history-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((p) => (
              <tr key={p.id}>
                <td>{p.item}</td>
                <td>{p.date}</td>
                <td>{p.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

/* ---------------- My Certificates ---------------- */
const MyCertificates = () => {
  const certificates = []; // Empty array so no certificates are displayed

  return (
    <div className="certificates-section">
      <h2>My Certificates</h2>
      {certificates.length === 0 ? (
        <p>No certificates found.</p>
      ) : (
        <ul className="certificates-list">
          {certificates.map((cert) => (
            <li key={cert.id}>
              <strong>{cert.title}</strong> - {cert.date} - <a href={cert.link}>View</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


/* ---------------- Profile Page ---------------- */
const ProfilePage = ({ userData, onUpdateProfile }) => {
  const [form, setForm] = useState(userData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSave = (e) => {
    e.preventDefault();
    onUpdateProfile(form);
    alert("Profile updated successfully!");
  };
  return (
    <div className="profile-page">
      <h2>My Profile</h2>
      <form onSubmit={handleSave} className="profile-form">
        <label>Name</label>
        <input name="name" value={form.name} onChange={handleChange} />
        <label>Email</label>
        <input name="email" value={form.email} onChange={handleChange} />
        <label>Country</label>
        <input name="country" value={form.country} onChange={handleChange} />
        <label>State</label>
        <input name="state" value={form.state} onChange={handleChange} />
        <label>Mobile Number</label>
        <input name="mobile" value={form.mobile} onChange={handleChange} />
        <label>Age</label>
        <input type="number" name="age" value={form.age} onChange={handleChange} />
        <label>Gender</label>
        <select name="gender" value={form.gender} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <label>Date of Birth</label>
        <input type="date" name="dob" value={form.dob} onChange={handleChange} />
        <label>Address</label>
        <textarea name="address" value={form.address} onChange={handleChange} />
        <button type="submit" className="profile-submit-btn">Submit</button>
      </form>
    </div>
  );
};

/* ---------------- Main App ---------------- */
const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('');
  const [mode, setMode] = useState("login");
  const [notifications, setNotifications] = useState(2);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [formAuth, setFormAuth] = useState({ email: "", password: "" });
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    country: "",
    state: "",
    mobile: "",
    age: "",
    gender: "",
    dob: "",
    address: ""
  });

  useEffect(() => {
    const savedUser = localStorage.getItem("loggedUserData");
    if (savedUser) {
      const parsed = JSON.parse(savedUser);
      setIsLoggedIn(true);
      setActiveTab("dashboard");
      setUserData(parsed);
    }
  }, []);

  const extractNameFromEmail = (email) => {
    const namePart = email?.split('@')[0] || "";
    return namePart
      .split(/[._]/)
      .filter(Boolean)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join(' ');
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (mode === "register") {
      localStorage.setItem("userAuth", JSON.stringify(formAuth));
      alert("Registration successful! Please log in.");
      setMode("login");
      setFormAuth({ email: "", password: "" });
    } else {
      const savedUser = JSON.parse(localStorage.getItem("userAuth"));
      if (savedUser && savedUser.email === formAuth.email && savedUser.password === formAuth.password) {
        const nameFromEmail = extractNameFromEmail(formAuth.email);
        const updatedUserData = { ...userData, name: nameFromEmail, email: formAuth.email };
        setUserData(updatedUserData);
        localStorage.setItem("loggedUserData", JSON.stringify(updatedUserData));
        setIsLoggedIn(true);
        setActiveTab("dashboard");
      } else {
        alert("Invalid email or password!");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedUserData");
    setIsLoggedIn(false);
    setActiveTab("");
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const markAllAsRead = () => {
    setNotifications(0);
  };

  const handleProfileUpdate = (updated) => {
    setUserData(updated);
    localStorage.setItem("loggedUserData", JSON.stringify(updated));
  };

  return (
    <div className="main-layout">
      <div className="sidebar">
        <div className="logo">
          <img src="https://nrichvideos.objectstore.e2enetworks.net/Z2BkcroppedImage.png" alt="Logo" />
        </div>
        {isLoggedIn && (
          <ul className="nav-links">
            <li className={activeTab === 'dashboard' ? 'active' : ''} onClick={() => setActiveTab('dashboard')}><FaTachometerAlt /> Dashboard</li>
            <li className={activeTab === 'courses' ? 'active' : ''} onClick={() => setActiveTab('courses')}><FaBookOpen /> Courses</li>
            <li className={activeTab === 'purchases' ? 'active' : ''} onClick={() => setActiveTab('purchases')}><FaMoneyBillWave /> Additional Purchases</li>
            </ul>
        )}
        <div className="auth-button">
          {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
        </div>
      </div>

      <div className="content-area">
        {isLoggedIn && (
          <div className="top-bar">
            <div className="notification-wrapper" onClick={toggleNotifications}>
              <FaBell className="icon" />
              {notifications > 0 && <span className="notification-badge">{notifications}</span>}
            </div>
            <div className="profile-section" onClick={() => setShowDropdown(!showDropdown)}>
              <div className="profile-circle">{userData.name?.charAt(0).toUpperCase()}</div>
              <span className="profile-name">Hi, {userData.name}</span>
              {showDropdown && (
                <div className="dropdown-menu">
                  <div onClick={() => { setActiveTab('profile'); setShowDropdown(false); }}><FaUser /> My Profile</div>
                  <div onClick={() => { setActiveTab('history'); setShowDropdown(false); }}><FaHistory /> Purchase History</div>
                  <div onClick={() => { setActiveTab('certificates'); setShowDropdown(false); }}><FaCertificate /> My Certificates</div>
                  <div onClick={handleLogout}><FaSignOutAlt /> Sign Out</div>
                </div>
              )}
            </div>
            {showNotifications && (
              <div className="notification-panel">
                <div className="notification-header">
                  <strong>Notifications</strong>
                  <span className="count">{notifications}</span>
                  <button className="mark-read" onClick={markAllAsRead}>✓ Mark all as read</button>
                </div>
                <div className="notification-list">
                  {notifications === 0 ? (
                    <p>No new notifications</p>
                  ) : (
                    <ul>
                      <li>Example notification 1</li>
                      <li>Example notification 2</li>
                    </ul>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {!isLoggedIn ? (
          <div className="login-container">
            <form className="login-form" onSubmit={handleAuthSubmit}>
              <h2>{mode === "login" ? "Login" : "Register"}</h2>
              <input type="text" placeholder="Email or Mobile Number" value={formAuth.email} onChange={(e) => setFormAuth({ ...formAuth, email: e.target.value })} required />
              <input type="password" placeholder="Password" value={formAuth.password} onChange={(e) => setFormAuth({ ...formAuth, password: e.target.value })} required />
              <button type="submit">{mode === "login" ? "Login" : "Register"}</button>
              <p className="toggle-mode" onClick={() => setMode(mode === "login" ? "register" : "login")}>
                {mode === "login" ? "New user? Register here" : "Already registered? Login here"}
              </p>
            </form>
          </div>
        ) : (
          <>
            {activeTab === 'dashboard' && <DashboardContent userName={userData.name} />}
            {activeTab === 'courses' && <Courses triggerLoginModal={() => setActiveTab("dashboard")} />}
            {activeTab === 'purchases' && <AdditionalPurchases triggerLoginModal={() => setActiveTab("dashboard")} />}
            {activeTab === 'history' && <PurchaseHistory />}
            {activeTab === 'certificates' && <MyCertificates />}
            {activeTab === 'profile' && <ProfilePage userData={userData} onUpdateProfile={handleProfileUpdate} />}
          </>
        )}
      </div>
    </div>
  );
};

export default Login;