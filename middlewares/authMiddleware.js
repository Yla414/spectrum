const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const authMiddleware = asyncHandler(async(req, res, next) => {
    let token;
    if(req?.headers?.authorization?.startsWith{'Bearer'}) {
        token
    } else {
        throw new Error('No token provided')
    }
})