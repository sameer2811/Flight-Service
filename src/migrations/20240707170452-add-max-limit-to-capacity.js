'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('Airplanes', {
      fields: ['capacity'],
      type: 'check',
      where: {
        capacity: {
          [Sequelize.Op.lte]: 1000
        }
      },
      name: 'check_capacity_max_value'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Airplanes', 'check_capacity_max_value');
  }
};
