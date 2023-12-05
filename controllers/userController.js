const User = require('../models/userModel');
const asynHandler = require('express-async-handler')

const createUser = async (req, res) => {
    // Check for existing user
    const email = req.body.email;
    const findUser = await User.findOne({ email });

    if(!findUser) {
        // Create a new user if user does not exist
        const newUser = await User.create(req.body);
        res.json(newUser);
    } else {
        // User alreadyexists
        res.json({
            message: 'User already exists',
            success: false,
        })
    };
};

module.exports = { createUser };