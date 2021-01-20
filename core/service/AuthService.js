import jwt from 'jsonwebtoken';
const { sign, verify } = jwt;
import SECRET from '../config/config.js';

function authenticate(req, res, next) {
    const token = req.headers['x-access-token'];
    verify(token, SECRET, (err, decoded) => {
        if (err)
            return res.status(401).end();
        req.user_id = decoded.user_id;
        next();
    });
}

function token(user_id) {
    return sign({user_id: user_id}, SECRET, {expiresIn: 300});
}

export default {
    authenticate,
    token
}