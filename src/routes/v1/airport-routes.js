const express = require('express');
const {
    AirportController
} = require('../../controller');
const {
    checkAirportValidation
} = require('./../../validators/airport-validator')
const airportRouter = express.Router();

// getting the Airport with particular Id:
airportRouter.get("/:id", AirportController.getAirportController);

// getting All the airport.
airportRouter.get("/", AirportController.getAllAirportController);

// creating the airport.
airportRouter.post("/", checkAirportValidation, AirportController.createAirportController);

// updating the airport.
airportRouter.patch("/:id", AirportController.updateAirportController);

// destroying the airport.
airportRouter.delete("/:id", AirportController.deleteAirportController);



module.exports = airportRouter;