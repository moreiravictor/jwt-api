import { Router } from 'express';
import authService from './core/service/AuthService.js';
import loginController from './adapter/http/controller/LoginController.js';
import productController from './adapter/http/controller/ProductController.js';
const routes = Router();

routes.post('/login', loginController.login);
routes.post('/product', authService.authenticate, productController.post);

routes.get('/product/:product_id', authService.authenticate, productController.get);
routes.get('/product', authService.authenticate, productController.getAll);

routes.patch('/product/:product_id', authService.authenticate, productController.patch);

export default routes;