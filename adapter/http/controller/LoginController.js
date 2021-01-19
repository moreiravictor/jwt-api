const authService = require('../../../core/service/AuthService'); 

module.exports = {
    async login(req, res) {
        const {user, password} = req.body;
        if (user && password) {
            const token  = authService.token(1);
            return res.json({auth: true, token});
        }
        res.status(401).end();
    }
}