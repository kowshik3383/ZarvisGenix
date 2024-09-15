const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'], // Basic email validation
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6 // You can set a password policy, such as minimum length
  },
  department: {
    type: String,
    required: true,
    enum: ['Design', 'Development', 'HR', 'Sales', 'Marketing', 'Research and Development', 'Production'] // Department options
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female'] // Ensures only male/female are allowed
  },
  number: {
    type: String,
    required: true,
    // match: [/^\d{10}$/, 'Please use a valid phone number'] // Validates 10-digit phone number
  },
  emergencyNumber: {
    type: String,
    required: true,
    // match: [/^\d{10}$/, 'Please use a valid emergency phone number'] // Validates 10-digit phone number
  },
  date: {
    type: Date,
    default: Date.now // Automatically adds the current date as the creation time
  }
});

module.exports = mongoose.model('User', UserSchema);
