const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
import
const dotenv = require('dotenv');
const authMiddleware = require('../middleware/authMiddleware');
dotenv.config();

router.get('/user', authMiddleware, (req, res) => {

})