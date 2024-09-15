// middleware/authMiddleware.js
// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const jwtSecret = 'your_jwt_secret'; // Make sure this matches the secret used in your routes

module.exports = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
