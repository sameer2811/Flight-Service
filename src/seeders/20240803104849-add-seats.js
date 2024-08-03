'use strict';

const {
  SEAT_TYPE_ENUM
} = require('../utils/common/enums');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Seats', [{
        row: 1,
        col: 'A',
        airplaneId: 5,
        seatType: SEAT_TYPE_ENUM.ECONOMY_CLASS,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        row: 1,
        col: 'B',
        airplaneId: 5,
        seatType: SEAT_TYPE_ENUM.ECONOMY_CLASS,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        row: 1,
        col: 'C',
        airplaneId: 5,
        seatType: SEAT_TYPE_ENUM.ECONOMY_CLASS,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        row: 1,
        col: 'D',
        airplaneId: 5,
        seatType: SEAT_TYPE_ENUM.ECONOMY_CLASS,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        row: 1,
        col: 'E',
        airplaneId: 5,
        seatType: SEAT_TYPE_ENUM.ECONOMY_CLASS,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        row: 1,
        col: 'F',
        airplaneId: 5,
        seatType: SEAT_TYPE_ENUM.ECONOMY_CLASS,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        row: 2,
        col: 'A',
        airplaneId: 5,
        seatType: SEAT_TYPE_ENUM.BUSINESS_CLASS,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        row: 2,
        col: 'B',
        airplaneId: 5,
        seatType: SEAT_TYPE_ENUM.BUSINESS_CLASS,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        row: 2,
        col: 'C',
        airplaneId: 5,
        seatType: SEAT_TYPE_ENUM.BUSINESS_CLASS,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        row: 2,
        col: 'D',
        airplaneId: 5,
        seatType: SEAT_TYPE_ENUM.ECONOMY_PREMIUM_CLASS,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        row: 2,
        col: 'E',
        airplaneId: 5,
        seatType: SEAT_TYPE_ENUM.ECONOMY_PREMIUM_CLASS,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        row: 2,
        col: 'F',
        airplaneId: 5,
        seatType: SEAT_TYPE_ENUM.ECONOMY_PREMIUM_CLASS,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Seat', null, {});
  }
};
