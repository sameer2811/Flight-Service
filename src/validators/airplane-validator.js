const {
    StatusCodes
} = require("http-status-codes");

async function checkAirplaneValidation(req, res, next) {

    if (!req.body.modelNumber) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            statusCode: StatusCodes.BAD_REQUEST,
            error: {},
            msg: 'modelNumber property is not defined Properly.',
        })
    }
    if (!req.body.capacity) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            statusCode: StatusCodes.BAD_REQUEST,
            error: {},
            msg: 'capacity property is not defined properly.',
        })
    }
    next();
}

module.exports = {
    checkAirplaneValidation
};