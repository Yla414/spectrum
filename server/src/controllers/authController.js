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
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = await UserModel.create({
            username: req.body.username,
            password: hashedPassword,
            email: req.body.email,
            role: req.body.role,
        });

        const token = generateToken(newUser);
        res.status(201).json({ token });
        res.status(200).json({ message: "User registered successfully" });
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

        const isValidPassword = await bcrypt.compare(req.body.password, user.password);

        if(!isValidPassword) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        const token = generateToken(user);
        res.json({ token });
        res.status(200).json({ messge: "User logged in successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const getUser = async (req, res) => {
    t
}

module.exports = { register, login };