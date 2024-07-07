const {
    StatusCodes
} = require("http-status-codes");
const {
    errorResponse
} = require("../utils/common/");

async function checkAirplaneValidation(req, res, next) {

    if (!req.body.modelNumber) {
        errorResponse.description = 'ModelNumber property is not defined Properly.';
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if (!req.body.capacity) {
        errorResponse.description = 'Capacity property is not defined properly.';
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    next();
}

module.exports = {
    checkAirplaneValidation
};