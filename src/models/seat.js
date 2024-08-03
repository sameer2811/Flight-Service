'use strict';
const {
  Model
} = require('sequelize');
const {
  SEAT_TYPE_ENUM
} = require('../utils/common/enums');
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane, {
        foreignKey: 'airplaneId',
        onDelete: 'CASCADE'
      });
    }
  }

  Seat.init({
    row: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    col: {
      type: DataTypes.STRING,
      allowNull: false
    },
    seatType: {
      type: DataTypes.ENUM,
      values: [SEAT_TYPE_ENUM.ECONOMY_CLASS, SEAT_TYPE_ENUM.BUSINESS_CLASS, SEAT_TYPE_ENUM.ECONOMY_PREMIUM_CLASS],
      allowNull: false,
      defaultValue: SEAT_TYPE_ENUM.ECONOMY_CLASS
    },
    airplaneId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Airplanes',
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};