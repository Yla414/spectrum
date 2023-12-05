const express = require('express');
const router = express.Router();
const { createUser, loginUserControl, getAllUsers, getOneUser, deleteUser, updateUser } = require('../controllers/userController');

//============= Setup routes=========== //

// Registration route
router.post('/register', createUser);
// Login route
router.post('/login', loginUserControl);
// Ftech all users
router.get('/all-users', getAllUsers);
// Fetch a single user
router.get('/:id', getOneUser)
// delete a single user
router.delete('/:id', deleteUser);
// Updat


module.exports = router;