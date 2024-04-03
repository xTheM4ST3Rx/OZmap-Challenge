class RegionService {
    async findAll() {
        return { message: 'list all' }
    }

    async findOne(id: string) {
        return { message: 'findById', id }
    }
}

export default new RegionService()
