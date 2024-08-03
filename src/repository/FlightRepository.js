const {
    Flight,
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
}

module.exports = FlightRepository;