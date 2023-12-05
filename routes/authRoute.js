const express = require('express');
const router = express.Router();
const { createUser } = require('../controll')

// Setup routes===========

// Registration route
router.post('/register');


module.exports = router;