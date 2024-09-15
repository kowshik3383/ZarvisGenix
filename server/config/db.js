// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		await mongoose.connect('mongodb+srv://kowshik:amma1234@cluster0.lvxhzlw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
		console.log('MongoDB Connected');
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};

module.exports = connectDB;
