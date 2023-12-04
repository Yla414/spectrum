const jwt = require('jsonwebtoken');
const UserModel = require('../models/user');

const generateToken = (user) => {
    const payload = {
        id: user._id,
        username: user.username,
        role: user.role,
    };

    return jwt.si
}