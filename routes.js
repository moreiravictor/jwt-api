const express = require('express');
const routes = express.Router();
const authService = require('./core/service/AuthService');
const LoginController = require('./adapter/http/controller/LoginController');

routes.post('/login', LoginController.login);
routes.post('/teste', authService.verify, (req, res) => {return res.json({'testado?': 'testado'})});

module.exports = routes;