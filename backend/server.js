const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middlewares/errorHandler');
require('colors');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Home route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Set the server port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.yellow.bold);
});

