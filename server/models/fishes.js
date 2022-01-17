"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class fishes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  fishes.init(
    {
      fish_name: DataTypes.STRING,
      habitat: DataTypes.STRING,
      temp: DataTypes.STRING,
      desc: DataTypes.TEXT,
      fish_img: DataTypes.STRING,
      fresh_water: DataTypes.BOOLEAN,
      reefsafe: DataTypes.BOOLEAN,
      size: DataTypes.STRING,
      sci_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "fishes",
    }
  );
  return fishes;
};
