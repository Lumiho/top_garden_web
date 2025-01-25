const Quote = require('../models/Quote');

// Create a new quote
const createQuote = async (req, res) => {
    try {
        const newQuote = await Quote.create(req.body);
        res.status(201).json(newQuote);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create quote' });
    }
};

// Get all quotes
const getAllQuotes = async (req, res) => {
    try {
        const quotes = await Quote.find();
        res.status(200).json(quotes);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch quotes' });
    }
};

// Get a quote by ID
const getQuoteById = async (req, res) => {
    try {
        const quote = await Quote.findById(req.params.id);
        if (!quote) {
            return res.status(404).json({ error: 'Quote not found' });
        }
        res.status(200).json(quote);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch the quote' });
    }
};

// Delete a quote by ID
const deleteQuoteById = async (req, res) => {
    try {
        const deletedQuote = await Quote.findByIdAndDelete(req.params.id);
        if (!deletedQuote) {
            return res.status(404).json({ error: 'Quote not found' });
        }
        res.status(200).json({ message: 'Quote deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete the quote' });
    }
};

module.exports = { createQuote, getAllQuotes, getQuoteById, deleteQuoteById };
