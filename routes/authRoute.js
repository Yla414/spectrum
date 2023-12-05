const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/userController');

//============= Setup routes=========== //

// Registration route
router.post('/register', createUser);
router.post('/login', createUser);


module.exports = router;