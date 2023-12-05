const User = require('../models/userModel');
const asynHandler = require('express-async-handler');

const createUser = asyncHandler()

module.exports = { createUser };