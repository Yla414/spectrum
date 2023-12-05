const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers')

// Setup routes===========

// Registration route
router.post('/register');


module.exports = router;