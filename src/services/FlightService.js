const {
    response
} = require("express");
const {
    AppError
} = require("../utils/errors");
const {
    StatusCodes
} = require("http-status-codes");
const {
    Op,
    INTEGER
} = require('sequelize');
class FlightService {
    constructor(repository) {
        this.repository = repository;
    }

    async createFlight(data) {
        try {
            const response = await this.repository.create(data);
            return response;
        } catch (error) {
            if (error.name === "SequelizeValidationError") {
                let explanations = [];
                error.errors.forEach(element => {
                    explanations.push(element);
                });
                throw new AppError(StatusCodes.BAD_REQUEST, explanations);
            }
            throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, error);
        }
    }

    async getAllFlights(queryParams) {
        try {
            let filterData = {};
            // Filtering for the trips.
            if (queryParams.trips) {
                let journeyArrDepToArrival = queryParams.trips.split("-");
                filterData.departureAirportId = journeyArrDepToArrival[0];
                filterData.arrivalAirportId = journeyArrDepToArrival[1];
            }
            if (queryParams.price) {
                let [minPrice, maxPrice] = queryParams.price.split("-");
                filterData.price = {
                    [Op.gte]: minPrice,
                    [Op.lte]: maxPrice
                }
            }
            if (queryParams.traveller) {
                let traveller = parseInt(queryParams.traveller);
                filterData.totalSeats = {
                    [Op.gte]: traveller
                }
            }
            const response = await this.repository.getAllFlights(filterData);
            return response;
        } catch (error) {
            throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, error);
        }
    }

}
module.exports = FlightService;