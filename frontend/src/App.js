import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Search from './pages/Search';
import Login from './pages/Login';
import AdminLogin from './pages/AdminLogin';
import Signup from './pages/Signup';
import AdminPGForm from './pages/AdminPGForm';
import Header from './components/Header';


export default function App() {
return (
<div>
<Header />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/search" element={<SearchResults />} />
<Route path="/searchform" element={<Search />} />
<Route path="/login" element={<Login />} />
<Route path="/admin" element={<AdminLogin />} />
<Route path="/signup" element={<Signup />} />
<Route path="/admin/pg/new" element={<AdminPGForm />} />
</Routes>
</div>
);
}