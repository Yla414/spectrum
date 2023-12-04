const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');


// REGISTRATION ROUTE
router.post('/register', async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        // Check for existing user
        const existingUser = await User.findOne({ username });
        if(existingUser) {
            const response =  res.status(400).json(({ message: 'Username already exists...!' }));
            console.log(response);
            return response;
        }

        // Password hashing
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({ username, email, password: hashedPassword, role });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// LOGIN ROUTE
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // fIND USER BY EMAIL
        const user = User.findOne({ email });
        if(!user) {
            const response = res.status(401).json({ message: 'Invalid email or password' });
            console.log((response));
            return response;
        }

        // Compare input password
        const passwordMatch = await bcrypt.compare(password, user.password)
    }
});

module.exports = router;