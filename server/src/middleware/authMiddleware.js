const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    req.user = decode;
    next();
} catch (error) 