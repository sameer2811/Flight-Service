const {
    City
} = require("../models");
const CrudRepository = require("./crudRepository");

class CityRepository extends CrudRepository {
    constructor() {
        super(City);
    }
}

module.exports = CityRepository;