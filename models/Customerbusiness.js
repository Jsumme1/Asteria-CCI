const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Customer_business extends Model {}

Customer_business.init(
  {

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
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
