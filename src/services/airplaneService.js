const {
    response
} = require("express");

class AirplaneService {
    constructor(repository) {
        this.repository = repository;
    }

    async createAirplane(data) {
        try {
            const response = await this.repository.create(data);
            return response;
        } catch (error) {
            console.log("Got an error in create Airplane ", error);
            throw error;
        }
    }
}
module.exports = AirplaneService;