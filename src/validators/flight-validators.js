const {
    StatusCodes
} = require("http-status-codes");
const {
    errorResponse
} = require("../utils/common/");
const compareTime = require("../utils/timeCompare");

async function checkFlightValidation(req, res, next) {

    if (!req.body.flightNumber) {
        errorResponse.description = 'flightNumber property is not defined Properly.';
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if (!req.body.airplaneId) {
        errorResponse.description = 'airplaneId property is not defined properly.';
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if (!req.body.departureAirportId) {
        errorResponse.description = 'departureAirportId property is not defined properly.';
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if (!req.body.arrivalAirportId) {
        errorResponse.description = 'arrivalAirportId property is not defined Properly.';
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if (!req.body.arrivalTime) {
        errorResponse.description = 'arrivalTime property is not defined properly.';
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if (!req.body.departureTime) {
        errorResponse.description = 'departureTime property is not defined properly.';
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if (!req.body.price) {
        errorResponse.description = 'price property is not defined Properly.';
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if (!req.body.totalSeats) {
        errorResponse.description = 'totalSeats property is not defined properly.';
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if (!compareTime(req.body.arrivalTime, req.body.departureTime)) {
        errorResponse.description = 'arrivalTime  is not greater then deaprtureTime.';
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    next();
}

module.exports = {
    checkFlightValidation
};