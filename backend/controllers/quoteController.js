const Quote = require('../models/Quote');

// @desc    Submit a new quote request
// @route   POST /api/quotes
// @access  Public
exports.createQuote = async (req, res) => {
  try {
    const {
      projectType,
      projectDetails: { name, squareFootage, completionDate, materials, budget },
      userDetails: { fullName, email },
    } = req.body;

    // Validate all required fields
    if (
      !projectType ||
      !name ||
      !squareFootage ||
      !completionDate ||
      !materials ||
      !budget ||
      !fullName ||
      !email
    ) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create a new quote document
    const newQuote = new Quote({
      projectType,
      projectDetails: { name, squareFootage, completionDate, materials, budget },
      userDetails: { fullName, email },
    });

    // Save the quote to the database
    const savedQuote = await newQuote.save();

    res.status(201).json({
      message: 'Quote submitted successfully',
      data: savedQuote,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
};

// @desc    Get all quotes
// @route   GET /api/quotes
// @access  Admin
exports.getAllQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find().sort({ createdAt: -1 }); // Sort by newest first
    res.status(200).json({
      message: 'Quotes fetched successfully',
      data: quotes,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
};

// @desc    Get a single quote by ID
// @route   GET /api/quotes/:id
// @access  Admin
exports.getQuoteById = async (req, res) => {
  try {
    const { id } = req.params;

    const quote = await Quote.findById(id);

    if (!quote) {
      return res.status(404).json({ error: 'Quote not found' });
    }

    res.status(200).json({
      message: 'Quote fetched successfully',
      data: quote,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
};

// @desc    Delete a quote by ID
// @route   DELETE /api/quotes/:id
// @access  Admin
exports.deleteQuoteById = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedQuote = await Quote.findByIdAndDelete(id);

    if (!deletedQuote) {
      return res.status(404).json({ error: 'Quote not found' });
    }

    res.status(200).json({
      message: 'Quote deleted successfully',
      data: deletedQuote,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
};
