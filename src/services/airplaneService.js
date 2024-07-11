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

    async getAllAirplanes() {
        try {
            const response = await this.repository.getAll();
            return response;
        } catch (error) {
            throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, "Cannot Fetch the Data of all the Airplanes");
        }
    }

    async getAirplaneById(id) {
        try {
            const response = await this.repository.get(id);
            return response;
        } catch (error) {
            if (error.status === StatusCodes.NOT_FOUND) {
                throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, "Cannot Found the requested aeroplane Id");
            }
            throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, "Cannot fetch the data of this airplane ID . Please try again");
        }
    }

    async deleteAirplaneById(id) {
        try {
            const response = await this.repository.destroy(id);
            return response;
        } catch (error) {
            if (error.status === StatusCodes.NOT_FOUND) {
                throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, "Cannot Found the requested aeroplane Id");
            }
            throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, "Cannot delete the data of this airplane ID . Please try again");
        }
    }

    async updateAirplaneById(id, data) {
        try {
            const response = await this.repository.update(id, data);
            return response;
        } catch (error) {
            if (error.status === StatusCodes.NOT_FOUND) {
                throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, "Cannot Update the requested aeroplane Id becuase we are not able to found this aeroplane id");
            } else if (error.name === "SequelizeValidationError") {
                let explanations = [];
                error.errors.forEach(element => {
                    explanations.push(element);
                });
                throw new AppError(StatusCodes.BAD_REQUEST, explanations);
            }
            throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, "Cannot Update the data of this airplane ID . Please try again");
        }
    }
}
module.exports = AirplaneService;