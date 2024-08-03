const express = require('express');
const FlightController = require('../../controller/flightController');
const {
    checkFlightValidation
} = require('../../validators/flight-validators');

const flightRouter = express.Router();

flightRouter.post("/", checkFlightValidation, FlightController.createFlightController);
flightRouter.get("/", FlightController.getAllFlightsController);


module.exports = flightRouter;