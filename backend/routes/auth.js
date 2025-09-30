const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// For demo: no DB for users, accept simple email/password and return mock token
router.post('/login', async (req, res) => {
const { email, password, role } = req.body; // role: user | admin
// In production, validate and check DB.
if (!email || !password) return res.status(400).json({ message: 'Missing' });
const token = jwt.sign({ email, role }, process.env.JWT_SECRET || 'demo_secret', { expiresIn: '7d' });
res.json({ token, email, role });
});

// Demo register endpoint that accepts name, contact, gender
router.post('/register', async (req, res) => {
const { email, password, name, contact, gender, role } = req.body;
if (!email || !password || !name || !contact || !gender) return res.status(400).json({ message: 'Missing' });
// In a real app, validate uniqueness, hash, and save user to DB
const finalRole = role === 'admin' ? 'admin' : 'user';
const token = jwt.sign({ email, role: finalRole, name, contact, gender }, process.env.JWT_SECRET || 'demo_secret', { expiresIn: '7d' });
res.status(201).json({ token, email, role: finalRole, name, contact, gender });
});


module.exports = router;