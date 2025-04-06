const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const authController = require('../controllers/authController');

// Signup
router.post('/signup', authController.signup);

// Login
router.post('/login', authController.login);

// Protected route (example)
router.get('/profile', authMiddleware, authController.getProfile);

module.exports = router;
