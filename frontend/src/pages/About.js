import React from 'react';

export default function About() {
  return (
    <>
      <main className="container">
        <div className="page-content">
          <h1 className="page-title">About Book My PG</h1>
          
          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              At Book My PG, we're committed to revolutionizing the way students and working professionals
              find their ideal paying guest accommodations across India. Our platform connects PG seekers
              with verified PG owners, ensuring a seamless and trustworthy experience.
            </p>
          </section>
          
          <section className="about-section">
            <h2>Who We Are</h2>
            <p>
              Founded in 2023, Book My PG has quickly grown to become India's largest PG booking network.
              Our team consists of passionate individuals who understand the challenges of finding quality
              accommodation in new cities.
            </p>
            <p>
              We leverage technology to solve real-world housing problems, making the PG hunting process
              efficient, transparent, and stress-free for thousands of users every day.
            </p>
          </section>
          
          <section className="about-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Trust</h3>
                <p>We verify all listings to ensure users can make decisions with confidence.</p>
              </div>
              <div className="value-card">
                <h3>Transparency</h3>
                <p>Clear information about facilities, pricing, and policies with no hidden charges.</p>
              </div>
              <div className="value-card">
                <h3>Convenience</h3>
                <p>Streamlined booking process that saves time and reduces stress.</p>
              </div>
              <div className="value-card">
                <h3>Community</h3>
                <p>Building connections between PG owners and seekers across India.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}