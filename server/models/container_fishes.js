'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class container_fishes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  container_fishes.init({
    container_id: DataTypes.INTEGER,
    fish_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'container_fishes',
  });
  return container_fishes;
};