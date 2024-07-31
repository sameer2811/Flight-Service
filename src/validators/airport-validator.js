const {
    StatusCodes
} = require("http-status-codes");
const {
    errorResponse
} = require("../utils/common/");

async function checkAirportValidation(req, res, next) {

    if (!req.body.name) {
        errorResponse.description = 'name property is not defined Properly.';
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if (!req.body.code) {
        errorResponse.description = 'code property is not defined properly.';
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if (!req.body.cityId) {
        errorResponse.description = 'cityId property is not defined properly.';
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    next();
}

module.exports = {
    checkAirportValidation
};