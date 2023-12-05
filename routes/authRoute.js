const express = require('express');
const router = express.Router();
const { createUser, loginUserControl, getAllUsers, getOneUser, deleteOneUser } = require('../controllers/userController');

//============= Setup routes=========== //

// Registration route
router.post('/register', createUser);
// Login route
router.post('/login', loginUserControl);
// Ftech all users
router.get('/all-users', getAllUsers);
// Fetch a single user
router.get('/:id', getOneUser)
// Fetch a single user
router.del('/:id', getOneUser)


module.exports = router;