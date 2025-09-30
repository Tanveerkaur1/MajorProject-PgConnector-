import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

export default function Signup(){
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [name, setName] = useState('');
const [contact, setContact] = useState('');
const [gender, setGender] = useState('male');
const [asAdmin, setAsAdmin] = useState(false);
const [error, setError] = useState('');
const navigate = useNavigate();

const onSubmit = async (e) => {
e.preventDefault();
setError('');
try{
const res = await api.post('/auth/register', { email, password, name, contact, gender, role: asAdmin ? 'admin' : 'user' });
localStorage.setItem('token', res.data.token);
localStorage.setItem('email', res.data.email);
localStorage.setItem('role', res.data.role || 'user');
navigate('/');
}catch(err){
setError(err?.response?.data?.message || 'Signup failed');
}
}

return (
<div className="container" style={{ padding: '40px 0' }}>
<h2>Sign up</h2>
<form className="search-form" onSubmit={onSubmit} style={{ maxWidth: 480 }}>
<input type="text" placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} required />
<input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
<input type="tel" placeholder="Contact number" value={contact} onChange={e=>setContact(e.target.value)} required />
<div style={{ display:'flex', gap:12, alignItems:'center' }}>
<label style={{ color:'#cbd5e1' }}>Gender:</label>
<label style={{ display:'flex', gap:6, alignItems:'center' }}><input type="radio" name="gender" value="male" checked={gender==='male'} onChange={()=>setGender('male')} /> Male</label>
<label style={{ display:'flex', gap:6, alignItems:'center' }}><input type="radio" name="gender" value="female" checked={gender==='female'} onChange={()=>setGender('female')} /> Female</label>
</div>
<input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
<label style={{ display:'flex', gap:8, alignItems:'center', color:'#cbd5e1' }}><input type="checkbox" checked={asAdmin} onChange={e=>setAsAdmin(e.target.checked)} /> Register as admin</label>
<button type="submit">Create account</button>
</form>
{error && <p style={{ color: '#ff9aa2', marginTop: 12 }}>{error}</p>}
</div>
);
}


