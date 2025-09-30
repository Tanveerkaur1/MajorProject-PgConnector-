import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../api';
import AuthCard from '../components/AuthCard';


export default function Home(){
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [contact, setContact] = useState('');
const [gender, setGender] = useState('male');
const [password, setPassword] = useState('');
const [roleReg, setRoleReg] = useState('user');
const [error, setError] = useState('');

// Login side
const [emailLogin, setEmailLogin] = useState('');
const [passwordLogin, setPasswordLogin] = useState('');
const [roleLogin, setRoleLogin] = useState('user');
const [errorLogin, setErrorLogin] = useState('');
const navigate = useNavigate();
return (
<main className="container">
<section className="hero">
<h2>Welcome to PG Connect</h2>
<div style={{ display:'grid', gridTemplateColumns:'1fr', gap:20, justifyItems:'start' }}>
  <AuthCard onSuccess={()=>navigate('/')} />
</div>
</section>
<section>
<h3>About</h3>
<p>PG Connect links seekers to verified PG owners. Admins can register properties and manage availability seamlessly.</p>
</section>
</main>
);
}