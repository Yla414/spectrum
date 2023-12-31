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

// Update  user
const updateUser = asyncHandler(async(req, res) => {
    const {_id} = req.user;
    try {
        const updatedUser = await User.findByIdAndUpdate(_id, {
            firstname: req?.body.firstname,
            lastname: req?.body.lastname,
            email: req?.body.email,
            mobile: req?.body.mobile
        }, {
            new: true
        });
        res.json(updatedUser)
    } catch (error) {
        throw new Error(error);
    }
})


// Fetch all users
const getAllUsers = asyncHandler (async(req, res) => {
    try {
        const getUsers = await User.find();
        res.json(getUsers);
    } catch (error) {
        throw new Error(error);
    }
});

// Fetch a single user
const getOneUser = asyncHandler(async(req, res) => {
    const {id} = req.params;
    try {
        const getUser = await User.findById(id);
        res.json({
            getUser,
        })
    } catch (error) {
        throw new Error(error);
    }
});

// Delete a single user
const deleteUser = asyncHandler(async(req, res) => {
    const {id} = req.params;
    try {
        const deleteOneUser = await User.findByIdAndDelete(id);
        res.json({
            deleteOneUser,
        })
    } catch (error) {
        throw new Error(error);
    }
});



module.exports = { createUser, loginUserControl, getAllUsers, getOneUser, deleteUser, updateUser };