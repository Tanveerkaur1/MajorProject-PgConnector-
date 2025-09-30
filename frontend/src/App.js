import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Search from './pages/Search';
import Login from './pages/Login';
import AdminLogin from './pages/AdminLogin';
import Signup from './pages/Signup';
import AdminPGForm from './pages/AdminPGForm';
import About from './pages/About';
import Features from './pages/Features';
import Results from './pages/Results';
import Header from './components/Header';

export default function App() {
return (
<div>
<Header />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/search" element={<Search />} />
<Route path="/results" element={<Results />} />
<Route path="/about" element={<About />} />
<Route path="/features" element={<Features />} />
<Route path="/login" element={<Login />} />
<Route path="/admin" element={<AdminLogin />} />
<Route path="/signup" element={<Signup />} />
<Route path="/admin/pg/new" element={<AdminPGForm />} />
</Routes>
</div>
);
}