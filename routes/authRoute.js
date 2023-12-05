const express = require('express');
const router = express.Router();
const { createUser, loginUserControl, getAllUsers, getOneUser } = require('../controllers/userController');

//============= Setup routes=========== //

// Registration route
router.post('/register', createUser);
// Login route
router.post('/login', loginUserControl);
// Ftech all users
router.get('/all-users', getAllUsers)
router.get('/:id', getOneUser)


module.exports = router;