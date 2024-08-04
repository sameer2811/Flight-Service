const {
    StatusCodes
} = require("http-status-codes");
const {
    FlightRepository
} = require("../repository");
const {
    FlightService
} = require("../services");
const {
    successResponse,
    errorResponse
} = require("../utils/common");

const flightService = new FlightService(new FlightRepository());

async function createFlightController(req, res) {
    try {
        const response = await flightService.createFlight(req.body);
        successResponse.data = response;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.status).json(errorResponse);
    }
}

async function getAllFlightsController(req, res) {
    try {
        const response = await flightService.getAllFlights(req.query);
        successResponse.data = response;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.status).json(errorResponse);
    }
}

async function getFlight(req, res) {
    try {
        const response = await flightService.getFlightById(req.params.id);
        successResponse.data = response;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.status).json(errorResponse);
    }
}

async function updateRemainingSeats(req, res) {
    try {
        const response = await flightService.updateRemainingSeats(req.params.id, req.body.seats, req.body.dec);
        successResponse.data = response;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.status).json(errorResponse);
    }
}
module.exports = {
    createFlightController,
    getAllFlightsController,
    getFlight,
    updateRemainingSeats
};