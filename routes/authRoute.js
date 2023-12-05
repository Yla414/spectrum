const express = require('express');
const router = express.Router();
const { createUser, loginUserControl, getAllUsers, getOneUser, deleteUser, updateUser } = require('../controllers/userController');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');

//============= Setup routes=========== //

// Registration route
router.post('/register', createUser);
// Login route
router.post('/login', loginUserControl);
// Ftech all users
router.get('/all-users', getAllUsers);
// Fetch a single user
router.get('/:id', authMiddleware, isAdmin, getOneUser);
// delete a single user
router.delete('/:id', deleteUser);
// Update a user
router.put('/edit-user', auth updateUser);


module.exports = router;