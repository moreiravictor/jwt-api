const { Model, DataTypes } = require('sequelize')

class Product extends Model {
  static init (sequelize) {
    super.init({
      image: DataTypes.STRING,
      name: DataTypes.STRING,
      value: DataTypes.DOUBLE,
    }, {
      sequelize
    })
  }
}

module.exports = Product