const jwt = require('jsonwebtoken');

const { JWT_KEY } = process.env;

function generateToken(payload) {
  // access token
  // refresh token
  return jwt.sign(payload, JWT_KEY, { expiresIn: '1d' });
}

function validateToken(token) {
  try {
    // decode payload
    return jwt.verify(token, JWT_KEY);
  } catch (e) {
    return null;
  }
}

module.exports = { generateToken, validateToken };

// try {
// validateToken()
// } catch(e){}
