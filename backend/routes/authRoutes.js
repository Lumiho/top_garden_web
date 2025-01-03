const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUser } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware'); // For protecting routes

// Route for user registration
router.post('/register', registerUser);

// Route for user login
router.post('/login', loginUser);

// Route for getting the current user (protected route)
router.get('/me', authMiddleware, getUser);

module.exports = router;
