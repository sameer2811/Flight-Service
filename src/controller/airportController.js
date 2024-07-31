const {
    StatusCodes
} = require("http-status-codes");
const {
    AirportRepository
} = require("../repository");
const {
    AirportService
} = require("../services");
const {
    successResponse,
    errorResponse
} = require("../utils/common");

const airportService = new AirportService(new AirportRepository())


async function createAirportController(req, res, next) {
    try {
        const response = await airportService.createAirport(req.body);
        successResponse.data = response;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.status).json(errorResponse);
    }
}

async function getAllAirportController(req, res, next) {
    try {
        const response = await airportService.getAllAirport();
        successResponse.data = response;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.status).json(errorResponse);
    }
}

async function getAirportController(req, res, next) {
    try {
        const response = await airportService.getAirportById(req.params.id);
        successResponse.data = response;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.status).json(errorResponse);
    }
}

async function deleteAirportController(req, res, next) {
    try {
        const response = await airportService.deleteAirportById(req.params.id);
        successResponse.data = response;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.status).json(errorResponse);
    }
}
async function updateAirportController(req, res, next) {
    try {
        const response = await airportService.updateAirportById(req.params.id, req.body);
        successResponse.data = response;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        console.log(error);
        errorResponse.error = error;
        return res.status(error.status).json(errorResponse);
    }
}

module.exports = {
    createAirportController,
    getAllAirportController,
    getAirportController,
    deleteAirportController,
    updateAirportController
};