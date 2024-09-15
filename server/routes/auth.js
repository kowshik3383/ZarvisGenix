const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/authMiddleware'); // Import the middleware

const router = express.Router();

// Secret key for JWT
const jwtSecret = 'your_jwt_secret';

// Register new user
router.post('/signup', async (req, res) => {
  const { firstName, lastName, email, password, department, gender, number, emergencyNumber } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create a new user instance
    user = new User({
      firstName,
      lastName,
      email,
      password,
      department,
      gender,
      number,
      emergencyNumber,
    });

    // Hash the password before saving
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Save the user to the database
    await user.save();

    // Create JWT payload and sign the token
    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, jwtSecret, { expiresIn: '7d' });

    // Return the token as a response
    res.json({ token, firstName: user.firstName, lastName: user.lastName ,email:user.email,department:user.department,number:user.number});
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
});

// Login user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Compare the entered password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Create JWT payload and sign the token
    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, jwtSecret, { expiresIn: '7d' });

    // Return the token as a response along with user details
    res.json({
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        department: user.department,
        gender: user.gender,
        number: user.number,
        emergencyNumber: user.emergencyNumber
      }
    });
    
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
});

// Get user details (requires authentication)
router.get('/user', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id); // req.usetr is set by auhMiddleware
    if (!user) return res.status(404).json({ msg: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
});

module.exports = router;
