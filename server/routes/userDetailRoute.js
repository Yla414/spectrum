const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const dotenv = require('dotenv');
const authMiddleware = require('../middleware/authMiddleware');
dotenv.config();

router.get('/user', authMiddleware, (req, res) => {
    try {
        const userId = req.user.userId;

        // Retrieve user data from the database
        
    }
})