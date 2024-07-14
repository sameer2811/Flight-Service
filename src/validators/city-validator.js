const {
    StatusCodes
} = require("http-status-codes");
const {
    errorResponse
} = require("../utils/common/");

async function checkCityValidation(req, res, next) {

    if (!req.body.name) {
        errorResponse.description = 'name is not defined Properly. send the request as name:${cityName}';
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    next();
}

module.exports = {
    checkCityValidation
};