const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParse: true,
            useUnifiedTopology: true,
        });
        console.log('Connect to the database');
    } catch (error) {
        console.error('Error connecting to the DB:', error.message);
        process.exit(1);
    }
}

module.exports