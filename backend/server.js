const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const quoteRoutes = require('./routes/quoteRoutes'); 
const errorHandler = require('./middlewares/errorHandler');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
require('colors');

dotenv.config();
console.log("MONGO_URI:", process.env.MONGO_URI);

connectDB();

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/quotes', quoteRoutes); 

// Error Handling Middleware
app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('API is running...');
});

process.on('SIGINT', async () => {
  console.log('Gracefully shutting down...'.red.bold);
  await mongoose.connection.close();
  process.exit(0);
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.yellow.bold);
});
