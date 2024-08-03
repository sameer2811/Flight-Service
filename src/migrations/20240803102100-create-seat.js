'use strict';

const {
  SEAT_TYPE_ENUM
} = require('../utils/common/enums');

/** @type {import('sequelize-cli').Migration} */
SEAT_TYPE_ENUM
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Seats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      row: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      col: {
        type: Sequelize.STRING,
        allowNull: false
      },
      seatType: {
        type: Sequelize.ENUM,
        values: [SEAT_TYPE_ENUM.ECONOMY_CLASS, SEAT_TYPE_ENUM.BUSINESS_CLASS, SEAT_TYPE_ENUM.ECONOMY_PREMIUM_CLASS],
        allowNull: false,
        defaultValue: SEAT_TYPE_ENUM.ECONOMY_CLASS
      },
      airplaneId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Airplanes',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Seats');
  }
};