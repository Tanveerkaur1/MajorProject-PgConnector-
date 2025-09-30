import React from 'react';
import { Link } from 'react-router-dom';
export default function Header(){
const email = typeof window !== 'undefined' ? localStorage.getItem('email') : null;
const role = typeof window !== 'undefined' ? localStorage.getItem('role') : null;
const onLogout = ()=>{
localStorage.removeItem('token');
localStorage.removeItem('email');
localStorage.removeItem('role');
window.location.href = '/';
}
return (
<header className="header">
  <div className="container">
    <div className="brand">
      <span className="logo" aria-hidden>🏠</span>
      <h1>Book My PG</h1>
      {email && (
        <div className="user-badge" title={role || 'user'}>
          <div className="avatar">{(email[0] || 'U').toUpperCase()}</div>
          <span className="email">{email}</span>
        </div>
      )}
    </div>
    <nav>
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/search">Search</Link>
      <Link className="nav-link" to="/about">About</Link>
      <Link className="nav-link" to="/features">Features</Link>
      {email && role==='admin' && <Link className="nav-link" to="/admin/pg/new">Add PG</Link>}
      {email && <button className="nav-link" onClick={onLogout} style={{ background: 'transparent', border: 0, cursor: 'pointer' }}>Logout</button>}
    </nav>
  </div>
</header>
);
}