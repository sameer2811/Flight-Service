const {
    response
} = require("express");
const {
    AppError
} = require("../utils/errors");
const {
    StatusCodes
} = require("http-status-codes");

class AirplaneService {
    constructor(repository) {
        this.repository = repository;
    }

    async createAirplane(data) {
        try {
            const response = await this.repository.create(data);
            return response;
        } catch (error) {
            throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, error);
        }
    }
}
module.exports = AirplaneService;