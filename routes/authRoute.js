const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/userController');

//======= Setup routes===========

// Registration route
router.post('/register', createUser);


module.exports = router;