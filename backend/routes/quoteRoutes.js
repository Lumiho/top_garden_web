const express = require('express');
const { createQuote, getAllQuotes, getQuoteById, deleteQuoteById } = require('../controllers/quoteController');
const { authMiddleware } = require('../middlewares/authMiddleware'); // Optional, if admin routes require authentication
const router = express.Router();

// @route   POST /api/quotes
// @desc    Submit a new quote
// @access  Public
router.post('/', createQuote);

// @route   GET /api/quotes
// @desc    Get all quotes
// @access  Admin
router.get('/', authMiddleware, getAllQuotes);

// @route   GET /api/quotes/:id
// @desc    Get a single quote by ID
// @access  Admin
router.get('/:id', authMiddleware, getQuoteById);

// @route   DELETE /api/quotes/:id
// @desc    Delete a quote by ID
// @access  Admin
router.delete('/:id', authMiddleware, deleteQuoteById);

module.exports = router;
