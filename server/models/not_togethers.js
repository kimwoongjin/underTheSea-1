'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class not_togethers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  not_togethers.init({
    fish_id: DataTypes.INTEGER,
    nt_fish_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'not_togethers',
  });
  return not_togethers;
};