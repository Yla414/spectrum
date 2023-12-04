const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if(!token) {
            throw new Error('Authentication failed');
        }
        
        req.user = decode;
        next();
    } catch (error) {
        res.status(500).json({ error: 'Authentication failed!' });
    }
    
};

module.exports = { authenticate };