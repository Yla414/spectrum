const User = require('../models/userModel');


const createUser = async (req, res) => {
    // Check for existing user
    const email = req.body.email;
    const findUser = await User.findOne(email);

    if(!findUser) {
        // Create a new user if u
        const newUser = User.create(req.body);
        res.json(newUser);
    } else {
        // User alreadyexists
        res.json({
            message: 'User already exists',
            success: false,
        })
    };
};

module.exports = { createUser };