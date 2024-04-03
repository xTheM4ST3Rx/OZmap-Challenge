import { RegionType } from './types'

class RegionService {
    async create(data: RegionType) {
        return { message: 'create', data }
    }
    async findAll() {
        return { message: 'list all' }
    }

    async findOne(id: string) {
        return { message: 'findById', id }
    }
    async update(id: string, data: RegionType) {
        return { message: 'update', id, data }
    }
}

export default new RegionService()
