const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    try {
        req.user = decode;
        next();
    } catch (error) {
        res.status(500).json
    }
    
}