const express = require('express');
const {
    CityController
} = require('../../controller');
const {
    checkCityValidation
} = require('../../validators/city-validator');
const cityRouter = express.Router();


// getting the city with particular Id:
cityRouter.get("/:id", CityController.getCityController);

// getting All the city
cityRouter.get("/", CityController.getAllCitiesController);

// creating the city.
cityRouter.post("/", checkCityValidation, CityController.createCityController);

// updating the city
cityRouter.patch("/:id", CityController.updateCityController);

// destroying the city
cityRouter.delete("/:id", CityController.deleteCityController);

module.exports = cityRouter;
