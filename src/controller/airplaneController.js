const {
    StatusCodes
} = require("http-status-codes");
const {
    AirplaneRepository
} = require("../repository");
const {
    AirplaneService
} = require("../services");
const {
    successResponse,
    errorResponse
} = require("../utils/common");

const airplaneService = new AirplaneService(new AirplaneRepository())


async function createAirplaneController(req, res, next) {
    try {
        const response = await airplaneService.createAirplane(req.body);
        successResponse.data = response;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.status).json(errorResponse);
    }
}

async function getAllAirplanesController(req, res, next) {
    try {
        const response = await airplaneService.getAllAirplanes();
        successResponse.data = response;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.status).json(errorResponse);
    }
}

async function getAirplaneController(req, res, next) {
    try {
        const response = await airplaneService.getAirplaneById(req.params.id);
        successResponse.data = response;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.status).json(errorResponse);
    }
}

async function deleteAeroplaneController(req, res, next) {
    try {
        const response = await airplaneService.deleteAirplaneById(req.params.id);
        successResponse.data = response;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.status).json(errorResponse);
    }
}
async function updateAeroplaneController(req, res, next) {
    try {
        const response = await airplaneService.updateAirplaneById(req.params.id, req.body);
        successResponse.data = response;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.status).json(errorResponse);
    }
}

module.exports = {
    createAirplaneController,
    getAllAirplanesController,
    getAirplaneController,
    deleteAeroplaneController,
    updateAeroplaneController
};