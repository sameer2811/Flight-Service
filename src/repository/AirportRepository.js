const {
    Airport
} = require("../models");
const CrudRepository = require("./crudRepository");

class AirportRepository extends CrudRepository {
    constructor() {
        super(Airport);
    }
}

module.exports = AirportRepository;