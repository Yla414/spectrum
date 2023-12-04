const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', async (req, res) => {
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
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/login', sync (req, res) => {
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
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
})


module.exports = router;