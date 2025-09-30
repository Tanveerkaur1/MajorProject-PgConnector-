// frontend/src/pages/SearchResults.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import api from '../api';
import PGCard from '../components/PGCard';
import MapView from '../components/MapView';

// helper hook for query params
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchResults() {
  const q = useQuery();
  const city = q.get('city') || '';
  const min = q.get('min');
  const max = q.get('max');
  const available = q.get('available');
  const [pgs, setPgs] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!city) return;
    const params = new URLSearchParams();
    if (city) params.set('city', city);
    // Backend currently supports only city; min/max/availability can be added later
    api
      .get(`/pgs?${params.toString()}`)
      .then((res) => setPgs(res.data))
      .catch((err) => console.error(err));
  }, [city]);

  return (
    <div className="container search-results">
      <h2>Results for "{city}"</h2>
      <div className="grid">
        <div className="list">
          {pgs.length === 0 && <p>No PGs found.</p>}
          {pgs.map((pg) => (
            <PGCard key={pg._id} pg={pg} onSelect={() => setSelected(pg)} />
          ))}
        </div>
        <div className="map">
          <MapView pgs={pgs} selected={selected} />
        </div>
      </div>
    </div>
  );
}
