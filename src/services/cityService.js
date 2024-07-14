const {
    AppError
} = require("../utils/errors");
const {
    StatusCodes
} = require("http-status-codes");

class CityService {
    constructor(repository) {
        this.repository = repository;
    }

    async createCity(data) {
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

    async getAllCities() {
        try {
            const response = await this.repository.getAll();
            return response;
        } catch (error) {
            throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, "Cannot Fetch the Data of all the Cities");
        }
    }

    async getCityById(id) {
        try {
            const response = await this.repository.get(id);
            return response;
        } catch (error) {
            if (error.status === StatusCodes.NOT_FOUND) {
                throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, "Cannot Found the requested City Id");
            }
            throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, "Cannot fetch the data of this City ID . Please try again");
        }
    }

    async deleteCityById(id) {
        try {
            const response = await this.repository.destroy(id);
            return response;
        } catch (error) {
            if (error.status === StatusCodes.NOT_FOUND) {
                throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, "Cannot Found the requested City Id");
            }
            throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, "Cannot delete the data of this City ID . Please try again");
        }
    }

    async updateCityById(id, data) {
        try {
            const response = await this.repository.update(id, data);
            return response;
        } catch (error) {
            if (error.status === StatusCodes.NOT_FOUND) {
                throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, "Cannot Update the requested City Id. becuase we are not able to found this City id");
            } else if (error.name === "SequelizeValidationError" || error.name === "SequelizeUniqueConstraintError") {
                let explanations = [];
                error.errors.forEach(element => {
                    explanations.push(element);
                });
                throw new AppError(StatusCodes.BAD_REQUEST, explanations);
            }
            throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, "Cannot Update the data of this City ID. Please try again");
        }
    }
}
module.exports = CityService;