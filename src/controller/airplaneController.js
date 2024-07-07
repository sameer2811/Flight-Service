const {
    StatusCodes
} = require("http-status-codes");
const {
    AirplaneRepository
} = require("../repository");
const {
    AirplaneService
} = require("../services");

const airplaneService = new AirplaneService(new AirplaneRepository())


async function createAirplaneController(req, res, next) {
    try {
        const response = await airplaneService.createAirplane(req.body);
        console.log(response);
        return res.status(StatusCodes.OK).json({
            success: true,
            statusCode: StatusCodes.OK,
            error: {},
            msg: 'sucessfully created the airplane',
            data : response
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
            msg: "something went wrong !!",
            description: error
        });
    }
}

module.exports = {
    createAirplaneController
};