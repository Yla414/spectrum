const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[]
        req.user = decode;
        next();
    } catch (error) {
        res.status(500).json({ error: 'Authentication failed!' });
    }
    
};

module.exports = { authenticate };