const errorHandler = (err, req, res, next) => {
    // Default status code and message
    const statusCode = err.status || 500;
    const message = err.message || 'Internal Server Error';
  
    // Send the error response
    res.status(statusCode).json({
      success: false,
      error: {
        message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
      },
    });
  };
  
  module.exports = errorHandler;
  