import React from 'react';

export default function PGCard({ pg, onSelect }){
  const imageSrc = (pg && pg.images && pg.images[0]) || 'https://images.unsplash.com/photo-1505692794403-34d4982bb4c4?q=80&w=1200&auto=format&fit=crop';
  const isAvailable = Boolean(pg && pg.availability);
  return (
    <article className="pg-card" onClick={onSelect} role="button" tabIndex={0} onKeyDown={(e)=>{ if(e.key==='Enter'){ onSelect && onSelect(); } }}>
      <div className="media">
        <img src={imageSrc} alt={pg?.name || 'PG image'} />
        <span className="badge">{pg?.city || 'City'}</span>
      </div>
      <div className="content">
        <h4 className="title">{pg?.name || 'Paying Guest'}</h4>
        <p className="meta">{pg?.address || 'Address not provided'}</p>
        <div className="row">
          <span className="price">₹{pg?.rent ? pg.rent.toLocaleString() : '—'}/mo</span>
          <span className={`availability ${isAvailable ? 'ok' : 'no'}`}>{isAvailable ? 'Available' : 'Full'}</span>
        </div>
        <div className="row" style={{ marginTop: 10 }}>
          <button className="btn" onClick={(e)=>{ e.stopPropagation(); window.open(`tel:${pg?.phone || ''}`); }}>Call</button>
          <button className="btn" onClick={(e)=>{ e.stopPropagation(); window.open(`mailto:${pg?.email || ''}`); }}>Email</button>
        </div>
      </div>
    </article>
  );
}


