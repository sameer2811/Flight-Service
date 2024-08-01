const {
    response
} = require("express");
const {
    AppError
} = require("../utils/errors");
const {
    StatusCodes
} = require("http-status-codes");

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

}
module.exports = FlightService;