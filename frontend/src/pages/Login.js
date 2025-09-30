import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

export default function Login(){
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [role, setRole] = useState('user');
const [error, setError] = useState('');
const navigate = useNavigate();

const onSubmit = async (e) => {
e.preventDefault();
setError('');
try{
const res = await api.post('/auth/login', { email, password, role });
localStorage.setItem('token', res.data.token);
localStorage.setItem('email', res.data.email);
localStorage.setItem('role', res.data.role || 'user');
navigate('/');
}catch(err){
setError(err?.response?.data?.message || 'Login failed');
}
}

return (
<div className="container" style={{ padding: '40px 0' }}>
<h2>User Login</h2>
<form className="search-form" onSubmit={onSubmit} style={{ maxWidth: 480 }}>
<input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
<input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
<div style={{ display:'flex', gap:12, alignItems:'center' }}>
<label style={{ color:'#cbd5e1' }}>Role:</label>
<label style={{ display:'flex', gap:6, alignItems:'center' }}><input type="radio" name="role" value="user" checked={role==='user'} onChange={()=>setRole('user')} /> User</label>
<label style={{ display:'flex', gap:6, alignItems:'center' }}><input type="radio" name="role" value="admin" checked={role==='admin'} onChange={()=>setRole('admin')} /> Admin</label>
</div>
<button type="submit">Login</button>
</form>
{error && <p style={{ color: '#ff9aa2', marginTop: 12 }}>{error}</p>}
</div>
);
}


