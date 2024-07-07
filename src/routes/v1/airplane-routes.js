const express = require('express');
const {
    AirplaneController
} = require('../../controller');
const {
    AirplaneValidator
} = require('../../validators');

const airplaneRouter = express.Router();

airplaneRouter.post("/", AirplaneValidator.checkAirplaneValidation, AirplaneController.createAirplaneController);

module.exports = airplaneRouter;
