const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const dotenv = require('dotenv');
const authMiddleware = require('../middleware/authMiddleware');
dotenv.config();

router.get('/me', authMiddleware, async (req, res) => {
    try {
        const userId = req.user.userId;

        // Retrieve user data from the database
        const user = await User.findById(userId);

        if(!user) {
            return res.status(404).json({ message: 'User does not exist!' });
        }

        res.status(200).json({ user });
    } catch (error) 
})