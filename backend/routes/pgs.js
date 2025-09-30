const express = require('express');
const router = express.Router();
const Pg = require('../models/Pg');
const jwt = require('jsonwebtoken');

function requireAdmin(req, res, next){
const auth = req.headers.authorization || '';
const token = auth.startsWith('Bearer ') ? auth.slice(7) : null;
if (!token) return res.status(401).json({ message: 'No token' });
try{
const payload = jwt.verify(token, process.env.JWT_SECRET || 'demo_secret');
if (payload.role !== 'admin') return res.status(403).json({ message: 'Forbidden' });
req.user = payload;
next();
}catch(e){
return res.status(401).json({ message: 'Invalid token' });
}
}


// GET /api/pgs?city=Delhi
router.get('/', async (req, res) => {
const { city } = req.query;
try {
const filter = {};
if (city) filter.city = new RegExp('^' + city + '$', 'i');
const pgs = await Pg.find(filter).limit(50);
res.json(pgs);
} catch (err) {
res.status(500).json({ message: 'Server error' });
}
});


// GET single pg
router.get('/:id', async (req, res) => {
try {
const pg = await Pg.findById(req.params.id);
if (!pg) return res.status(404).json({ message: 'Not found' });
res.json(pg);
} catch (err) {
res.status(500).json({ message: 'Server error' });
}
});

// POST create a PG (admin only)
router.post('/', requireAdmin, async (req, res) => {
try{
const created = await Pg.create(req.body);
res.status(201).json(created);
}catch(err){
res.status(400).json({ message: 'Invalid payload' });
}
});

// POST seed sample PGs (admin only)
router.post('/seed', requireAdmin, async (req, res) => {
try{
await Pg.deleteMany({});
const sample = [
{ name: 'Sunshine PG', ownerName: 'Mr. Sharma', phone: '9876543210', email: 'sunshine@example.com', city: 'Dehradun', address: 'MG Road, Dehradun', rent: 8000, availability: true, images: [], location: { lat: 30.3165, lng: 78.0322 } },
{ name: 'Green Residency', ownerName: 'Mrs. Gupta', phone: '9123456780', email: 'green@example.com', city: 'Dehradun', address: 'Rajpur Road', rent: 9000, availability: true, images: [], location: { lat: 30.3380, lng: 77.9990 } },
{ name: 'City Comfort PG', ownerName: 'Mr. Joshi', phone: '9012345678', email: 'citycomfort@example.com', city: 'Haridwar', address: 'Har Ki Pauri area', rent: 7000, availability: true, images: [], location: { lat: 29.9457, lng: 78.1633 } },
];
const docs = await Pg.insertMany(sample);
res.json({ inserted: docs.length });
}catch(err){
res.status(500).json({ message: 'Seed failed' });
}
});


module.exports = router;