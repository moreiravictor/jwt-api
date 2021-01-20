import express, { json } from 'express';
import routes from './routes.js';
import './adapter/database/index.js';
const app = express();

app.use(json());
app.use(routes);

app.listen(8080);