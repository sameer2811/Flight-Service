const {
    AppError
} = require("../utils/errors");
const {
    StatusCodes
} = require("http-status-codes");

class AiportService {
    constructor(repository) {
        this.repository = repository;
    }

    async createAirport(data) {
        try {
            const response = await this.repository.create(data);
            return response;
        } catch (error) {
            if (error.name === "SequelizeValidationError" || error.name === "SequelizeUniqueConstraintError") {
                let explanations = [];
                error.errors.forEach(element => {
                    explanations.push(element);
                });
                throw new AppError(StatusCodes.BAD_REQUEST, explanations);
            }
            throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, error);
        }
    }

    async getAllAirport() {
        try {
            const response = await this.repository.getAll();
            return response;
        } catch (error) {
            throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, "Cannot Fetch the Data of all the Airports");
        }
    }

    async getAirportById(id) {
        try {
            const response = await this.repository.get(id);
            return response;
        } catch (error) {
            if (error.status === StatusCodes.NOT_FOUND) {
                throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, "Cannot Found the requested Airport Id");
            }
            throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, "Cannot fetch the data of this Airport ID . Please try again");
        }
    }

    async deleteAirportById(id) {
        try {
            const response = await this.repository.destroy(id);
            return response;
        } catch (error) {
            if (error.status === StatusCodes.NOT_FOUND) {
                throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, "Cannot Found the requested Airport Id");
            }
            throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, "Cannot delete the data of this Airport ID . Please try again");
        }
    }

    async updateAirportById(id, data) {
        try {
            const response = await this.repository.update(id, data);
            return response;
        } catch (error) {
            if (error.status === StatusCodes.NOT_FOUND) {
                throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, "Cannot Update the requested Airport Id. becuase we are not able to found this airport id");
            } else if (error.name === "SequelizeValidationError" || error.name === "SequelizeUniqueConstraintError") {
                let explanations = [];
                error.errors.forEach(element => {
                    explanations.push(element);
                });
                throw new AppError(StatusCodes.BAD_REQUEST, explanations);
            }
            throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, "Cannot Update the data of this airport ID. Please try again");
        }
    }
}
module.exports = AiportService;