import React, { useState } from 'react';
import api from '../api';

export default function AuthCard({ onSuccess }){
const [active, setActive] = useState('signup'); // 'login' | 'signup'
const [role, setRole] = useState('user'); // 'user' | 'admin'

// shared fields
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// signup only
const [name, setName] = useState('');
const [contact, setContact] = useState('');
const [gender, setGender] = useState('male');
const [confirm, setConfirm] = useState('');

const [error, setError] = useState('');

const handleSignup = async () => {
  if (!name || !email || !password || !confirm || !contact) { setError('Please fill all fields'); return; }
  if (password !== confirm) { setError('Passwords do not match'); return; }
  try{
    const res = await api.post('/auth/register', { name, email, password, contact, gender, role });
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('email', res.data.email);
    localStorage.setItem('role', res.data.role || role);
    if (onSuccess) onSuccess();
    // Ensure header reflects new auth immediately
    window.location.assign('/');
  }catch(err){ setError(err?.response?.data?.message || 'Signup failed'); }
}

const handleLogin = async () => {
  if (!email || !password) { setError('Enter email and password'); return; }
  try{
    const res = await api.post('/auth/login', { email, password, role });
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('email', res.data.email);
    localStorage.setItem('role', res.data.role || role);
    if (onSuccess) onSuccess();
    // Ensure header reflects new auth immediately
    window.location.assign('/');
  }catch(err){ setError(err?.response?.data?.message || 'Login failed'); }
}

return (
  <div className="auth-card">
    <h2 className="auth-title">{active === 'signup' ? 'Signup Form' : 'Login'}</h2>
    <div className="auth-tabs">
      <button className={`auth-tab ${active==='login'?'active':''}`} onClick={()=>{ setActive('login'); setError(''); }}>
        Login
      </button>
      <button className={`auth-tab ${active==='signup'?'active':''}`} onClick={()=>{ setActive('signup'); setError(''); }}>
        Signup
      </button>
    </div>

    <div className="auth-role">
      <button className={`role ${role==='user'?'on':''}`} onClick={()=>setRole('user')}>User</button>
      <button className={`role ${role==='admin'?'on':''}`} onClick={()=>setRole('admin')}>Admin</button>
    </div>

    {active === 'signup' ? (
      <div className="auth-fields">
        <input className="auth-input" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
        <input className="auth-input" placeholder="Email Address" type="email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="auth-input" placeholder="Contact" value={contact} onChange={e=>setContact(e.target.value)} />
        <div className="auth-gender">
          <label><input type="radio" name="gender" checked={gender==='male'} onChange={()=>setGender('male')} /> Male</label>
          <label><input type="radio" name="gender" checked={gender==='female'} onChange={()=>setGender('female')} /> Female</label>
        </div>
        <input className="auth-input" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <input className="auth-input" placeholder="Confirm password" type="password" value={confirm} onChange={e=>setConfirm(e.target.value)} />
        <button className="auth-submit" onClick={handleSignup}>Signup</button>
      </div>
    ) : (
      <div className="auth-fields">
        <input className="auth-input" placeholder="Email Address" type="email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="auth-input" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="auth-submit" onClick={handleLogin}>Login</button>
      </div>
    )}

    {error && <p className="auth-error">{error}</p>}
  </div>
);
}


