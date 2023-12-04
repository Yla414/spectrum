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

})


module.exports = router;