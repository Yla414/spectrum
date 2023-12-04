const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if(!token) {
        return res.status(401).json({ message: 'Unathorized. No token provided!' });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if(err) {
            return res.status(401).json({ message: 'Unauthorized. Invalid token' });
        }

        // Attach user details to the request
        req.user = {
            userId: decoded.userId,
            username: decoded.username,
            role: decoded.role,
        };
        
    })
}