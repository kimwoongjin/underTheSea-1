"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("fishes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fish_name: {
        type: Sequelize.STRING,
      },
      habitat: {
        type: Sequelize.STRING,
      },
      temp: {
        type: Sequelize.STRING,
      },
      desc: {
        type: Sequelize.TEXT,
      },
      fish_img: {
        type: Sequelize.STRING,
      },
      fresh_water: {
        type: Sequelize.BOOLEAN,
      },
      reefsafe: {
        type: Sequelize.BOOLEAN,
      },
      size: {
        type: Sequelize.STRING,
      },
      sci_name: {
        type: Sequelize.STRING,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("fishes");
  },
};
