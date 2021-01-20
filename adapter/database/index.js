import Sequelize from 'sequelize';
import database_config from './config/database.js';

import User from '../../core/model/User.js';
import Product from '../../core/model/Product.js';

const connection = new Sequelize(database_config);

User.init(connection);
Product.init(connection);

export default connection;