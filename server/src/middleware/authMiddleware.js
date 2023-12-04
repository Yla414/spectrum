const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    try {
        co
        req.user = decode;
        next();
    } catch (error) {
        res.status(500).json({ error: 'Authentication failed!' });
    }
    
};

module.exports = { authenticate };