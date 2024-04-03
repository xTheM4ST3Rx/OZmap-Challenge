import { UserModel } from '../../models/user.model'
import STATUS from '../../utils/constants'
import { UserType } from './types'

class UserService {
    async create(userData: UserType) {
        const user = new UserModel(userData)
        await user.save()
        return { status: STATUS.USER_CREATED }
    }

    async findAll(page: number, limit: number) {
        const users = await UserModel.find()
            .skip(page * limit)
            .limit(limit)
            .lean()
        const total = await UserModel.count()
        return { rows: users, page, limit, total }
    }

    async findOne(id: string) {
        const user = await UserModel.findOne({ _id: id }).lean()
        if (!user) {
            return {
                status: STATUS.INTERNAL_SERVER_ERROR,
                message: 'Region not found',
            }
        }
        return user
    }

    async update(id: string, userData: UserType) {
        const user = await UserModel.findOne({ _id: id })
        if (!user) {
            return {
                status: STATUS.INTERNAL_SERVER_ERROR,
                message: 'Region not found',
            }
        }
        user.name = userData.name
        await user.save()
        return { status: STATUS.USER_UPDATED }
    }
}

export default new UserService()
