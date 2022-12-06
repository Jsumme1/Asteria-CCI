const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Customer_terminal extends Model {}

Customer_terminal.init(
  {
   
    customer_business_id: {
        type: DataTypes.INTEGAR,
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
    modelName: "customer_terminal",
  }
);

module.exports = Customer_terminal;