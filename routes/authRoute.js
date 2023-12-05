const express = require('express');
const router = express.Router();
const { createUser, loginUserControl } = require('../controllers/userController');

//============= Setup routes=========== //

// Registration route
router.post('/register', createUser);
// Login route
router.post('/login', loginUserControl);


module.exports = router;