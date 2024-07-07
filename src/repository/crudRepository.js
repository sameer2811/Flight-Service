class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            console.log(`error Occured in the Create ${error}`);
            throw error;
        }
    }
    async destroy(data) {
        try {
            const response = await this.model.destroy({
                where: {
                    id: data
                }
            });
            return response;
        } catch (error) {
            console.log(`error Occured in the Destroy ${error}`);
            throw error;
        }
    }

    async get(data) {
        try {
            const response = await this.model.findByPk({
                where: {
                    id: data
                }
            });
            return response;
        } catch (error) {
            console.log(`error Occured in the get ${error}`);
            throw error;
        }
    }

    async getAll(data) {
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            console.log(`error Occured in the getAll ${error}`);
            throw error;
        }
    }

    async update(id, data) {
        try {
            const response = await this.model.update(data, {
                where: {
                    id: id
                }
            });
            return response;
        } catch (error) {
            console.log(`error Occured in the Update ${error}`);
            throw error;
        }
    }
}


module.exports = CrudRepository;