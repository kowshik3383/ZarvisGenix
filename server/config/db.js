// config/db.js
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
	try {
		// Replace 'MONGO_URI' with your actual environment variable name
		await mongoose.connect(process.env.MONGO, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('MongoDB Connected');
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};

module.exports = connectDB;
