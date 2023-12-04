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
            return res.status(400).json(({ message: 'Username already exists...!' }));
        }

        // Password hashing
        const hashedPassword = await bcrypt.hash(password, )
    } catch (error) {

    }
});


// LOGIN ROUTE
router.post('/login', async (req, res) => {})