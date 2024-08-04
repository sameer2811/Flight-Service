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
const CrudRepository = require("./crudRepository");


class FlightRepository extends CrudRepository {
    constructor() {
        super(Flight);
    }

    async getAllFlights(filter) {
        const response = await Flight.findAll({
            where: filter,
            include: [{
                model: Airplane,
            }, {
                model: Airport,
                as: "departureAirport",
                on: Sequelize.where(Sequelize.col("Flight.departureAirportId"), "=", Sequelize.col("departureAirport.code"))
            }, {
                model: Airport,
                as: "arrivalAirport",
                on: Sequelize.where(Sequelize.col("Flight.arrivalAirportId"), "=", Sequelize.col("arrivalAirport.code"))
            }]
        });
        return response;
    }

    async updateRemainingSeats(flightId, seatCount, decrease) {
        seatCount = parseInt(seatCount);
        const flight = await Flight.findByPk(flightId);
        if (decrease) {
            await flight.decrement('totalSeats', {
                by: seatCount
            });
            return flight;
        } else {
            await flight.increment('totalSeats', {
                by: seatCount
            });
            return flight;
        }
    }
}
module.exports = FlightRepository;