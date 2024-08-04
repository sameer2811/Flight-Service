const express = require('express');
const FlightController = require('../../controller/flightController');
const {
    checkFlightValidation
} = require('../../validators/flight-validators');
const {
    checkSeatValidation
} = require('../../validators/seats-validator');

const flightRouter = express.Router();

flightRouter.post("/", checkFlightValidation, FlightController.createFlightController);
flightRouter.get("/", FlightController.getAllFlightsController);
flightRouter.get("/:id", FlightController.getFlight);
flightRouter.patch("/:id/seats", checkSeatValidation, FlightController.updateRemainingSeats);

module.exports = flightRouter;