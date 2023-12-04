const jwt = require('jsonwebtoken');
const UserModel = require('../models/user');
const crypto = require('crypto');

const generateToken = (user) => {
    const payload = {
        id: user._id,
        username: user.username,
        role: user.role,
    };

    return jwt.sign(payload, crypto.randomBytes(32).toString('hex'), { expiresIn: '1d' });
}

const register = async (req, res) => {
    try {
        // Validate and hash user password
        const newUser = await UserModel.create({
            username: req.body.username,
            email: req.body.email,
            role: req.body.role,
        });

        const token = generateToken(newUser);
        res.
    }
}