const {Airplane} = require("../models");
const CrudRepository = require("./crudRepository");

class AirplaneRepository extends CrudRepository {
    constructor() {
        super(Airplane);
    }
}

module.exports = AirplaneRepository;