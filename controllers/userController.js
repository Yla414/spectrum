const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const { generateToken } = require('../config/jwtToken');

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
    if(findUser && await findUser.isPasswordMatched(password)) {
        res.json({
            _id: findUser._id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            mobile: findUser?.mobile,
            token: generateToken(findUser?._id)
        });
    } else {
        throw new Error('Invalid credentials...!')
    }
});


// Fetch all users
const get



module.exports = { createUser, loginUserControl };