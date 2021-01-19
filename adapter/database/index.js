const Sequelize = require('sequelize');
const database_config = require('./config/database');

const User = require('../../core/model/User');
const Product = require('../../core/model/Product');

const connection = new Sequelize(database_config);

User.init(connection);
Product.init(connection);

module.exports = connection;