import React from 'react';
import './places.css';

const cities = [
  { name: 'Bangalore', style: { color: 'black' }, image: 'https://th.bing.com/th/id/OIP.BeFAoAdkATnVMUutxolsPAHaE5?w=283&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
  { name: 'Hyderabad', style: { color: 'black' }, image: 'https://th.bing.com/th/id/OIP.99Rv-FdZK3no8aGvpfMhHwHaE8?w=272&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
  { name: 'Chennai', style: { color: 'black' }, image: 'https://chennaitourism.travel/images/places-to-visit/headers/san-thome-basilica-church-chennai-tourism-entry-fee-timings-holidays-reviews-header.jpg' },
  { name: 'Amaravati', style: { color: 'black' }, image: 'https://th.bing.com/th/id/OIP.xo9rlQZJydoTlCTtl6O7dAHaEK?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
];

function App11() {
  return (
    <div className="app-container">
      {/* Background Video */}
      

      {/* Hero Section */}
      <div className="hero">
        <h1 style={{ color: 'black' }}>Explore Tech-Enabled Offline Vidyapeeth Centres</h1>
        <p style={{ color: 'black' }}>Creating new benchmarks in learning experiences</p>
      </div>

      {/* Content Section */}
      <div className="center-list-container">
        <h2 style={{ color: 'black' }}>Find Vidyapeeth Centre in your city</h2>
        <p>Available in <span className="city-count">4</span> cities</p>

        <div className="city-grid">
          {cities.map((city) => (
            <div key={city.name} className="city-card">
              <img src={city.image} alt={city.name} />
              <span>{city.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App11;
