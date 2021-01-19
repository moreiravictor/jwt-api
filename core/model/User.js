const { Model, DataTypes } = require('sequelize')

class User extends Model {
  static init (sequelize) {
    super.init({
        user_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        user: DataTypes.STRING,
        password: DataTypes.STRING,
    }, {sequelize})
  }
}

module.exports = User