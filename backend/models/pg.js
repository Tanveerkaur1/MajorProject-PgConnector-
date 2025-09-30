const mongoose = require('mongoose');
const PgSchema = new mongoose.Schema({
name: String,
ownerName: String,
phone: String,
email: String,
city: String,
address: String,
rent: Number,
availability: Boolean,
images: [String],
location: { // store lat/lng for maps
lat: Number,
lng: Number
},
createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Pg', PgSchema);