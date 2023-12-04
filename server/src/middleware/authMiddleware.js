const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if(!token) {
            throw new Error('Authentication failed');
        }
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(402).json({ error: 'Authentication failed!' });
    }
    
};

module.exports = { authenticate };