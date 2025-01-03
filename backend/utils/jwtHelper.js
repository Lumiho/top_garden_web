const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET || 'defaultSecretKey'; // Replace 'defaultSecretKey' with a secure key in production

/**
 * Generates a JSON Web Token for a given payload.
 * 
 * @param {Object} payload - Data to be encoded in the token.
 * @param {String} expiresIn - Expiration time (e.g., '1h', '7d').
 * @returns {String} - Signed JWT.
 */
const generateToken = (payload, expiresIn = '1h') => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
};

/**
 * Verifies a JSON Web Token and decodes the payload.
 * 
 * @param {String} token - JWT to verify.
 * @returns {Object} - Decoded payload if valid, or throws an error.
 */
const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (err) {
    throw new Error('Invalid or expired token');
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
