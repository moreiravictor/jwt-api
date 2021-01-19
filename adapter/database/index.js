const Sequelize = require('sequelize');
const dbConfig = require('./config/database');

// const Product = require('../../core/model/Product');
// const User = require('../../core/model/User');

const connection = new Sequelize(dbConfig);

// Product.init(connection);
// User.init(connection);


module.exports = connection;