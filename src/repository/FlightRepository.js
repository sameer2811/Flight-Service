const {
    Flight
} = require("../models");

const {
    Airplane,
    Airport
} = require("../models");
const {
    Sequelize
} = require('sequelize');

const db = require('./../models/');
const CrudRepository = require("./crudRepository");
const {
    AppError
} = require("../utils/errors");


class FlightRepository extends CrudRepository {
    constructor() {
        super(Flight);
    }

    async getAllFlights(filter) {
        const response = await Flight.findAll({
            where: filter,
            include: [{
                    model: Airplane,
                },
                {
                    model: Airport,
                    as: "departureAirport",
                    on: Sequelize.where(Sequelize.col("Flight.departureAirportId"), "=", Sequelize.col("departureAirport.code"))
                },
                {
                    model: Airport,
                    as: "arrivalAirport",
                    on: Sequelize.where(Sequelize.col("Flight.arrivalAirportId"), "=", Sequelize.col("arrivalAirport.code"))
                }
            ]
        });
        return response;
    }

    async updateRemainingSeats(flightId, seatCount, decrease) {
        try {
            seatCount = parseInt(seatCount);
            const t = await db.sequelize.transaction();
            const flight = await Flight.findByPk(flightId, {
                lock: true,
                transaction: t
            });
            if (!flight) {
                throw new AppError(StatusCodes.NOT_FOUND, "Not Able to find the resource");
            }
            if (decrease) {
                await flight.decrement('totalSeats', {
                    by: seatCount,
                    transaction: t
                });
            } else {
                await flight.increment('totalSeats', {
                    by: seatCount,
                    transaction: t
                });
            }
            await flight.reload({
                transaction: t
            });
            await t.commit();
            return flight;
        } catch (error) {
            await t.rollback();
            throw error;
        }
    }
}
module.exports = FlightRepository;