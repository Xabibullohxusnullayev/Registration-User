const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router();

// Ro‘yxatdan o‘tish
router.post('/register', registerUser);

// Login qilish
router.post('/login', loginUser);

module.exports = router;
