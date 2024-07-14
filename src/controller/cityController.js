const {
    StatusCodes
} = require("http-status-codes");
const {
    CityRepository
} = require("../repository");
const {
    CityService
} = require("../services");
const {
    successResponse,
    errorResponse
} = require("../utils/common");

const cityService = new CityService(new CityRepository());

async function createCityController(req, res, next) {
    try {
        const response = await cityService.createCity(req.body);
        successResponse.data = response;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.status).json(errorResponse);
    }
}

async function getAllCitiesController(req, res, next) {
    try {
        const response = await cityService.getAllCities();
        successResponse.data = response;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.status).json(errorResponse);
    }
}

async function getCityController(req, res, next) {
    try {
        const response = await cityService.getCityById(req.params.id);
        successResponse.data = response;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.status).json(errorResponse);
    }
}

async function deleteCityController(req, res, next) {
    try {
        const response = await cityService.deleteCityById(req.params.id);
        successResponse.data = response;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.status).json(errorResponse);
    }
}
async function updateCityController(req, res, next) {
    try {
        const response = await cityService.updateCityById(req.params.id, req.body);
        successResponse.data = response;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.status).json(errorResponse);
    }
}

module.exports = {
    createCityController,
    getAllCitiesController,
    getCityController,
    deleteCityController,
    updateCityController
};