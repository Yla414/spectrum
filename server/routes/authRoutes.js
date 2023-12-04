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
        
    } catch (error) {

    }
});


// LOGIN ROUTE
router.post('/login', async (req, res) => {})