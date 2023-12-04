const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if(!token) {
        return res.status(401).json({ message: 'Unathorized. No token provided!' });
    }

    jwt.verify(token, process.env.JWT_SECRET_)
}