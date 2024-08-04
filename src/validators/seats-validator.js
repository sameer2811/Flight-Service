const {
    StatusCodes
} = require("http-status-codes");
const {
    errorResponse
} = require("../utils/common/");

async function checkSeatValidation(req, res, next) {
    if (!req.body.seats) {
        errorResponse.description = 'seats property is not defined properly.';
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    next();
}

module.exports = {
    checkSeatValidation
};