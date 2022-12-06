const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Terminal_business extends Model {}

Terminal_business.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    account_status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "terminal_business",
  }
);

module.exports = Terminal_business;
