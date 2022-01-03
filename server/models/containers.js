"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class containers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  containers.init(
    {
      user_id: DataTypes.INTEGER,
      container_name: DataTypes.STRING,
      size: DataTypes.INTEGER,
      theme: DataTypes.STRING,
      fish_num: DataTypes.INTEGER,
      container_img: DataTypes.STRING,
      level_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "containers",
    }
  );
  return containers;
};
