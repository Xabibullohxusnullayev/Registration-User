const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

// Muhit o‘zgaruvchilarni yuklash
dotenv.config();

// MongoDB ulanishi
connectDB();

const app = express();

// Middleware
app.use(bodyParser.json());

// API marshrutlar
app.use('/api/auth', authRoutes);

// Portni o‘rnatish va serverni ishga tushirish
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server ${PORT}-portda ishlamoqda`));
