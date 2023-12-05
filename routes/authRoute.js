const express = require('express');
const router = express.Router();
const { createUser, loginUserControl, get } = require('../controllers/userController');

//============= Setup routes=========== //

// Registration route
router.post('/register', createUser);
// Login route
router.post('/login', loginUserControl);
// Ftech all users
router.get('/all-users', getAllUsers)


module.exports = router;