const express = require('express');
const routes = require('./routes');
require('./adapter/database/index');
const app = express();

app.use(express.json());
app.use(routes);

app.listen(8080);