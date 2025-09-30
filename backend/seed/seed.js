// run this with: node seed/seed.js
dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Pg = require('../models/Pg');


(async () => {
await connectDB(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/pgconnect');
await Pg.deleteMany({});
const sample = [
{
name: 'Sunshine PG',
ownerName: 'Mr. Sharma',
phone: '9876543210',
email: 'sunshine@example.com',
city: 'Dehradun',
address: 'MG Road, Dehradun',
rent: 8000,
availability: true,
images: [],
location: { lat: 30.3165, lng: 78.0322 }
},
{
name: 'Green Residency',
ownerName: 'Mrs. Gupta',
phone: '9123456780',
email: 'green@example.com',
city: 'Dehradun',
address: 'Rajpur Road',
rent: 9000,
availability: true,
images: [],
location: { lat: 30.3380, lng: 77.9990 }
},
{
name: 'City Comfort PG',
ownerName: 'Mr. Joshi',
phone: '9012345678',
email: 'citycomfort@example.com',
city: 'Haridwar',
address: 'Har Ki Pauri area',
rent: 7000,
availability: true,
images: [],
location: { lat: 29.9457, lng: 78.1633 }
}
];
await Pg.insertMany(sample);
console.log('Seeded sample PGs');
process.exit();
})();