import React from 'react';

export default function Features() {
  return (
    <>
      <main className="container">
        <div className="page-content">
          <h1 className="page-title">Features</h1>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Smart Search</h3>
              <p>Find PGs by location, budget, amenities, and more with our powerful search filters.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">✅</div>
              <h3>Verified Listings</h3>
              <p>All PGs on our platform are verified to ensure quality and accuracy of information.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile Friendly</h3>
              <p>Access our platform on any device with our responsive design.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>Reviews & Ratings</h3>
              <p>Make informed decisions with authentic reviews from previous tenants.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure Booking</h3>
              <p>Book your PG with confidence through our secure payment system.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📍</div>
              <h3>Interactive Maps</h3>
              <p>Explore neighborhoods and find nearby amenities with our interactive maps.</p>
            </div>
          </div>
          
          <section className="coming-soon">
            <h2>Coming Soon</h2>
            <ul className="feature-list">
              <li>Virtual tours of PG properties</li>
              <li>In-app messaging with PG owners</li>
              <li>Roommate matching service</li>
              <li>Maintenance request tracking</li>
              <li>Rent payment reminders</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}