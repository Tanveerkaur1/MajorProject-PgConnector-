import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin(){
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const navigate = useNavigate();

const onSubmit = async (e) => {
e.preventDefault();
setError('');
try{
const res = await api.post('/auth/login', { email, password, role: 'admin' });
localStorage.setItem('token', res.data.token);
localStorage.setItem('email', res.data.email);
localStorage.setItem('role', res.data.role || 'admin');
navigate('/');
}catch(err){
setError(err?.response?.data?.message || 'Login failed');
}
}

return (
<div className="container" style={{ padding: '40px 0' }}>
<h2>Admin Login</h2>
<form className="search-form" onSubmit={onSubmit} style={{ maxWidth: 480 }}>
<input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
<input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
<button type="submit">Login</button>
</form>
{error && <p style={{ color: '#ff9aa2', marginTop: 12 }}>{error}</p>}
</div>
);
}


