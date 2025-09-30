import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Results() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useState({});
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Parse query parameters
    const params = new URLSearchParams(location.search);
    const city = params.get('city') || '';
    
    setSearchParams({ city });
    
    // Simulate API call to fetch results
    setLoading(true);
    
    // For now, we'll just set empty results
    // In a real app, you would fetch from your backend API
    setTimeout(() => {
      setResults([]);
      setLoading(false);
    }, 500);
  }, [location.search]);

  return (
    <>
      <main className="container">
        <div className="results-container">
          <h2 className="results-title">Results for "{searchParams.city || ''}"</h2>
          
          <div className="results-layout">
            <div className="results-list">
              {loading ? (
                <div className="loading">Loading results...</div>
              ) : results.length > 0 ? (
                results.map((pg, index) => (
                  <div key={index} className="pg-card">
                    {/* PG card content would go here */}
                    <h3>{pg.name}</h3>
                  </div>
                ))
              ) : (
                <div className="no-results">
                  <h3>No PGs found.</h3>
                  <p>Try adjusting your search criteria or explore other cities.</p>
                  <div className="search-tips">
                    <h4>Search Tips:</h4>
                    <ul>
                      <li>Check the spelling of your search term</li>
                      <li>Try searching for a different city</li>
                      <li>Use more general search terms</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            
            <div className="map-container">
              <div className="map-placeholder">
                <div className="map-header">
                  <h3>Map</h3>
                  <span className="places-count">0 places</span>
                </div>
                {/* Map would be integrated here in a real application */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}