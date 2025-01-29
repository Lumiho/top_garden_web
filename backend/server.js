const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middlewares/errorHandler');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
require('colors');

//for the api routes
const reviewRoutes = require('./routes/reviewRoutes');
const portfolioRoute = require('./routes/portfolioRoute');
// const quoteRoutes = require('./routes/quoteRoutes');
const path = require('path');

// Load environment variables
dotenv.config();

// Connect to MongoDB
// connectDB();

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/reviews', reviewRoutes); // Reviews routes (with prefix)
app.use('/api/v1/portfolio', portfolioRoute);
// app.use('/api/quotes', quoteRoutes);
// Error Handling Middleware
app.use(errorHandler);

// Home route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Graceful Shutdown
process.on('SIGINT', async () => {
  console.log('Gracefully shutting down...'.red.bold);
  await mongoose.connection.close();
  process.exit(0);
});

//images

// Middleware to serve static files
app.use('/Media', express.static(path.join(__dirname, 'Media')));
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

// Set the server port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.yellow.bold);
});

