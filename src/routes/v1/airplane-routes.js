const express = require('express');
const {
    AirplaneController
} = require('../../controller');
const {
    AirplaneValidator
} = require('../../validators');

const airplaneRouter = express.Router();

airplaneRouter.post("/", AirplaneValidator.checkAirplaneValidation, AirplaneController.createAirplaneController);
airplaneRouter.get("/", AirplaneController.getAllAirplanesController);
airplaneRouter.get("/:id", AirplaneController.getAirplaneController);
airplaneRouter.delete("/:id", AirplaneController.deleteAeroplaneController);
airplaneRouter.patch("/:id", AirplaneController.updateAeroplaneController);

module.exports = airplaneRouter;
