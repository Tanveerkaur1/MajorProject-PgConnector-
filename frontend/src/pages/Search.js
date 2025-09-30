import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Search(){
const [city, setCity] = useState('');
const [minRent, setMinRent] = useState('');
const [maxRent, setMaxRent] = useState('');
const [gender, setGender] = useState('any');
const [onlyAvailable, setOnlyAvailable] = useState(true);
const navigate = useNavigate();

const onSubmit = (e)=>{
e.preventDefault();
const params = new URLSearchParams();
if (city) params.set('city', city);
if (minRent) params.set('min', String(minRent));
if (maxRent) params.set('max', String(maxRent));
if (gender && gender !== 'any') params.set('gender', gender);
if (onlyAvailable) params.set('available', '1');
navigate(`/results?${params.toString()}`);
}

return (
<main className="container" style={{ padding: '32px 0' }}>
<h2 style={{ margin: '0 0 16px' }}>Search PGs</h2>
<form className="search-form" onSubmit={onSubmit} style={{ flexDirection:'column', alignItems:'stretch', maxWidth: 720 }}>
<input placeholder="City" value={city} onChange={e=>setCity(e.target.value)} required />
<div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
<input type="number" placeholder="Min Rent (₹)" value={minRent} onChange={e=>setMinRent(e.target.value)} />
<input type="number" placeholder="Max Rent (₹)" value={maxRent} onChange={e=>setMaxRent(e.target.value)} />
</div>
<div style={{ display:'flex', gap:16, alignItems:'center' }}>
<label style={{ color:'#cbd5e1' }}>Gender preference:</label>
<label style={{ display:'flex', gap:6, alignItems:'center' }}><input type="radio" name="gender-pref" value="any" checked={gender==='any'} onChange={()=>setGender('any')} /> Any</label>
<label style={{ display:'flex', gap:6, alignItems:'center' }}><input type="radio" name="gender-pref" value="male" checked={gender==='male'} onChange={()=>setGender('male')} /> Male</label>
<label style={{ display:'flex', gap:6, alignItems:'center' }}><input type="radio" name="gender-pref" value="female" checked={gender==='female'} onChange={()=>setGender('female')} /> Female</label>
</div>
<label style={{ display:'flex', gap:8, alignItems:'center', color:'#cbd5e1' }}><input type="checkbox" checked={onlyAvailable} onChange={e=>setOnlyAvailable(e.target.checked)} /> Only show available</label>
<div style={{ display:'flex', justifyContent:'flex-end' }}>
<button type="submit">Search</button>
</div>
</form>
</main>
);
}


