"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ex_waters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ex_waters.init(
    {
      container_id: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ex_waters",
    }
  );
  return ex_waters;
};
