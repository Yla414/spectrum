const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const authMiddlewar = asyncHandler(async(req, res, next) => {
    let to
})