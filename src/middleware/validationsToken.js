const tokenJwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const tokenValidation = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }
    try {
        const decoded = tokenJwt.verify(token, secret);
        req.user = decoded.data;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = {
    tokenValidation,
};