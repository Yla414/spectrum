const jwt = require('jsonwebtoken');
const UserModel = require('../models/user');
const crypto = require('crypto');
const bcrypt = require('bcrypt');

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
        const salt = 10;
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const newUser = await UserModel.create({
            username: req.body.username,
            password,
            email: req.body.email,
            role: req.body.role,
        });

        const token = generateToken(newUser);
        res.status(201).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const login = async (req, res) => {
    try {
        // Validate the credentials
        const user = UserModel.findOne({ username: req.body.username });

        if(!user) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        const 
    } catch (error) {
        
    }
}