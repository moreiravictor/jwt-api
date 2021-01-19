const { Model, DataTypes } = require('sequelize')

class Product extends Model {
  static init (sequelize) {
    super.init({
        product_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        image: DataTypes.STRING,
        name: DataTypes.STRING,
        value: DataTypes.DOUBLE,
    }, {sequelize})
  }
}

module.exports = Product