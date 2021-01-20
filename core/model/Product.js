import type from 'sequelize'

class Product extends type.Model {
  static init (sequelize) {
    super.init({
        product_id: {type: type.DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        image: type.DataTypes.STRING,
        name: type.DataTypes.STRING,
        value: type.DataTypes.DOUBLE,
    }, {sequelize})
  }
}

export default Product