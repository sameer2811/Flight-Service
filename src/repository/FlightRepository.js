const {
    Flight
} = require("../models");
const CrudRepository = require("./crudRepository");

class FlightRepository extends CrudRepository {
    constructor() {
        super(Flight);
    }
}

module.exports = FlightRepository;