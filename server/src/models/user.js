const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type:String,
        required: true,
    },
    role: {
        type: String,
        enum: ['Guest', 'Seller', 'Creator'],
        default: 'Guest'
    }
});

module.exports = mongoose.