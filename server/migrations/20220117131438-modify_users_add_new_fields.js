'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'containers',
        'last_lv_up',{
          type:Sequelize.DATE,
          allowNull: true
        }
      )
    ])
  }

  async down (queryInterface, Sequelize) {
 
    queryInterface.removeColumn('containers', 'last_lv_up')
  }
};
