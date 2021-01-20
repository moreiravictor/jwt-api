import type from 'sequelize';

class User extends type.Model {
  static init(sequelize) {
    super.init({
        user_id: {type: type.DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        username: type.DataTypes.STRING,
        password: type.DataTypes.STRING,
    }, {sequelize})
  }
}

export default User;