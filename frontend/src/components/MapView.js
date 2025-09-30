import React, { useMemo } from 'react';

export default function MapView({ pgs = [], selected }){
  // Create deterministic pseudo positions for markers if no lat/lng present
  const markers = useMemo(() => {
    return pgs.map((pg, idx) => {
      const hasLocation = pg?.location && typeof pg.location.lat === 'number' && typeof pg.location.lng === 'number';
      if (hasLocation) {
        // Map real lat/lng to percentage roughly (not geographically accurate, placeholder)
        const top = 50 - ((pg.location.lat % 1) * 40 - 20);
        const left = 50 + ((pg.location.lng % 1) * 40 - 20);
        return { id: pg._id || idx, top, left, name: pg.name };
      }
      // Otherwise distribute pseudo
      const angle = (idx / Math.max(pgs.length, 1)) * Math.PI * 2;
      const top = 50 + Math.sin(angle) * 25;
      const left = 50 + Math.cos(angle) * 25;
      return { id: pg._id || idx, top, left, name: pg.name };
    });
  }, [pgs]);

  return (
    <div className="map-surface">
      <div className="map-toolbar">
        <span className="title">Map</span>
        <span className="pill">{pgs.length} places</span>
      </div>
      <div className="map-body">
        {markers.map((m) => (
          <div key={m.id} className="map-marker" title={m.name}
               style={{ top: `${m.top}%`, left: `${m.left}%`, transform: 'translate(-50%, -50%)' }} />
        ))}
        {selected && (
          <div className="map-marker" title={selected.name}
               style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%) scale(1.4)', background: 'var(--primary)' }} />
        )}
      </div>
    </div>
  );
}


