const express = require('express');
const routes = express.Router();
const authService = require('./core/service/AuthService');

const loginController = require('./adapter/http/controller/LoginController');
const productController = require('./adapter/http/controller/ProductController');

routes.post('/login', loginController.login);
routes.post('/product', authService.verify, productController.post);

routes.get('/product/:product_id', authService.verify, productController.get);
routes.get('/product', authService.verify, productController.getAll);

routes.patch('/product/:product_id', authService.verify, productController.patch);

module.exports = routes;