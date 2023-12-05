const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

const createUser = asyncHandler(
    async (req, res) => {
        // Check for existing user
        const email = req.body.email;
        const findUser = await User.findOne({ email });
    
        if(!findUser) {
            // Create a new user if user does not exist
            const newUser = await User.create(req.body);
            res.json(newUser);
        } else {
            throw new Error('User already exists...!');
        };
    }
);

const loginUserControl = asyncHandler(async(req, res) => {
    const { email, password } = req.body;
    // Find if the user is registered
    const findUser = await User.findOne({ email });
    if(user)
})



module.exports = { createUser, loginUserControl };