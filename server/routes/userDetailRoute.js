const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const dotenv = require('dotenv');
const authMiddleware = require('../middleware/authMiddleware');
dotenv.config();

router.get('/user', authMiddleware, (req, res) => {
    
})