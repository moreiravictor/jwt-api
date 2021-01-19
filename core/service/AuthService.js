const jwt = require('jsonwebtoken');
const {SECRET} = require('../config/config'); 

function verify(req, res, next) {
    const token = req.headers['x-access-token'];
    jwt.verify(token, SECRET, (err, decoded) => {
        if (err)
            return res.status(401).end();
        req.user_id = decoded.user_id;
        next();
    });
}

function token(user_id) {
    return jwt.sign({user_id: user_id}, SECRET, {expiresIn: 300});
}

module.exports = {
    verify,
    token
}