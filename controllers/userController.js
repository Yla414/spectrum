const User = require('../models/userModel');


const createUser = async (req, res) => {
    // Check for existing user
    const email = req.body.email;
    const findUser = await User.findOne(email);

    if
}