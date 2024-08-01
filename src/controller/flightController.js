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
module.exports = {
    createFlightController,
};