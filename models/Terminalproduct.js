const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Terminal_product extends Model {}

Terminal_product.init(
  {
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    terminal_business_id: {
        type: DataTypes.INTEGAR,
        allowNull: false,
      }
  },

  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "terminal_product",
  }
);

module.exports = Terminal_product;
