require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');


const app = express();
app.use(cors());
app.use(express.json());


const mongo = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/pgconnect';
connectDB(mongo);


app.use('/api/pgs', require('./routes/pgs'));
app.use('/api/auth', require('./routes/auth'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));