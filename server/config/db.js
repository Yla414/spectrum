const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.en)
    } catch (error) {
        
    }
}