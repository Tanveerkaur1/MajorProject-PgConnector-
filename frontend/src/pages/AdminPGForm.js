import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

export default function AdminPGForm(){
const [name, setName] = useState('');
const [ownerName, setOwnerName] = useState('');
const [phone, setPhone] = useState('');
const [email, setEmail] = useState('');
const [city, setCity] = useState('');
const [address, setAddress] = useState('');
const [rent, setRent] = useState('');
const [availability, setAvailability] = useState(true);
const [error, setError] = useState('');
const navigate = useNavigate();

const onSubmit = async (e)=>{
e.preventDefault();
setError('');
try{
const payload = { name, ownerName, phone, email, city, address, rent: Number(rent), availability };
await api.post('/pgs', payload);
navigate('/');
}catch(err){
setError(err?.response?.data?.message || 'Failed to create PG');
}
}

return (
<div className="container" style={{ padding: '40px 0' }}>
<h2>Add PG (Admin)</h2>
<form className="search-form" onSubmit={onSubmit} style={{ maxWidth: 640, flexDirection: 'column', alignItems: 'stretch' }}>
<input placeholder="PG Name" value={name} onChange={e=>setName(e.target.value)} required />
<input placeholder="Owner Name" value={ownerName} onChange={e=>setOwnerName(e.target.value)} required />
<input placeholder="Phone" value={phone} onChange={e=>setPhone(e.target.value)} required />
<input placeholder="Contact Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
<input placeholder="City" value={city} onChange={e=>setCity(e.target.value)} required />
<input placeholder="Address" value={address} onChange={e=>setAddress(e.target.value)} required />
<input placeholder="Rent (₹)" type="number" value={rent} onChange={e=>setRent(e.target.value)} required />
<label style={{ display:'flex', gap:8, alignItems:'center', color:'#cbd5e1' }}><input type="checkbox" checked={availability} onChange={e=>setAvailability(e.target.checked)} /> Available</label>
<div style={{ display:'flex', gap:12, justifyContent:'flex-end' }}>
<button type="submit">Save</button>
</div>
</form>
{error && <p style={{ color: '#ff9aa2', marginTop: 12 }}>{error}</p>}
</div>
);
}


