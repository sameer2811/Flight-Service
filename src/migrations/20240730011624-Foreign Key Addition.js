'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("Airports", {
      fields: ["cityId"],
      type: "foreign key",
      name: "airport_foreign_key_addition",
      references: {
        table: "cities",
        field: "id",
      },
      onDelete: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Airports", "airport_foreign_key_addition");
  }
};
