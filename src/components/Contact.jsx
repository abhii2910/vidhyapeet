import './Contact.css';

function ContactSection() {
  return (
    <div className="contact-video-container">
      {/* Background Video */}
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="./src/assets/back2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Foreground Content */}
      <div className="contact-wrapper">
        {/* Left Side: Office Info */}
        <div className="contact-left">
          <h2>Head Office</h2>
          <p>
            📍 8th Cross Rd, near green view medical center, Teacher's Colony,
            Jakkasandra, Jakkasandra Extension, HSR Layout 5th Sector, Bengaluru, Karnataka 560034
          </p>

          <h3>Support Enquiries</h3>
          <p>📧 growyourskills30@gmail.com</p>
          <p>📞 7905043534</p>

          <div className="map-container">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=12.9214,77.6378&z=15&output=embed"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="contact-right">
          <h2>Connect with us</h2>
          <form className="contact-form">
            <label>Your Name *</label>
            <input type="text" placeholder="Enter your name" required />

            <label>Your Email *</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Your Mobile Number *</label>
            <div className="phone-input">
              <span>🇮🇳 +91</span>
              <input type="tel" placeholder="074104 10123" required />
            </div>

            <button type="submit">Submit Enquiry</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
