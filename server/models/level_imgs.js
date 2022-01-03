'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class level_imgs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  level_imgs.init({
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'level_imgs',
  });
  return level_imgs;
};