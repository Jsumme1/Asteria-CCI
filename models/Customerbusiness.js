const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Customer_business extends Model {}

Customer_business.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },

  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "customer_business",
  }
);

module.exports = Customer_business;
