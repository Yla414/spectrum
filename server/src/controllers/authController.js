const jwt = require('jsonwebtoken');
const UserModel = require('../models/user');
const crypto = require('crypto');

const generateToken = (user) => {
    const payload = {
        id: user._id,
        username: user.username,
        role: user.role,
    };

    return jwt.sign(payload, requi.randomBytes(32).toString('hex')))
}