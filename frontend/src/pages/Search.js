import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Search(){
const [searchQuery, setSearchQuery] = useState('');
const navigate = useNavigate();

const featuredCities = [
  "Bengaluru", "Bhubaneswar", "Chennai", "Coimbatore", 
  "Gurgaon", "Hyderabad", "Indore", "Jaipur", 
  "Kolkata", "Mumbai", "New Delhi", "Noida"
];

const handleSearch = (e) => {
  e.preventDefault();
  const params = new URLSearchParams();
  if (searchQuery) params.set('city', searchQuery);
  navigate(`/results?${params.toString()}`);
}

const handleCityClick = (city) => {
  const params = new URLSearchParams();
  params.set('city', city);
  navigate(`/results?${params.toString()}`);
}

return (
  <>
    <main className="container">
      {/* Hero Section with Logo and Tagline */}
      <div className="search-hero">
        <div className="brand-container">
          <h1 className="brand-logo">Book My PG</h1>
          <p className="brand-tagline">India's Largest PG Network to Book your PG Online</p>
        </div>
        
        {/* Main Search Section */}
        <div className="search-container">
          <form onSubmit={handleSearch} className="search-form-main">
            <input 
              type="text" 
              className="search-input" 
              placeholder="Enter city name, area etc..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
          </form>
        </div>
        
        {/* Featured Cities Grid */}
        <div className="featured-cities-section">
          <h2 className="section-title">Popular Cities</h2>
          <div className="cities-grid">
            {featuredCities.map((city, index) => (
              <div 
                key={index} 
                className="city-card" 
                onClick={() => handleCityClick(city)}
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
    
    {/* Footer */}
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Book My PG</h3>
            <p>India's Largest PG Network</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Book My PG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </>
);
}


