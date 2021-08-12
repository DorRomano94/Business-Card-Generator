const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const token = req.header('token');
    if (!token) return res.status(403).send({ message: 'Access Denied' });
    else {
        try {
            const verified = jwt.verify(token, process.env.TOKEN_SECRET);
            req.user = verified;
            next();
        } catch (error) {
            res.status(403).send({ message: 'Invalid Token' });
        }
    }
}

